import { useState, useRef, useEffect } from 'react';
import { ResumeData } from '../types';
import { defaultData } from '../data/defaultData';
import LeftPanel from '../components/resume/LeftPanel';
import ResumePreview from '../components/resume/ResumePreview';
import Toolbar from '../components/resume/Toolbar';
import { useBgCanvas } from '../hooks/useBgCanvas';

const CACHE_KEY = 'jdm_resume_data_v1';

function loadFromCache(): ResumeData {
	try {
		const raw = localStorage.getItem(CACHE_KEY);
		if (!raw) return defaultData;
		const parsed = JSON.parse(raw);
		return { ...defaultData, ...parsed };
	} catch {
		return defaultData;
	}
}

function saveToCache(data: ResumeData) {
	try {
		localStorage.setItem(CACHE_KEY, JSON.stringify(data));
	} catch {
	}
}

export default function ResumeMaker() {
	const [data, setData] = useState<ResumeData>(loadFromCache);
	const [scale, setScale] = useState(1);
	const [saveIndicator, setSaveIndicator] = useState(false);
	const previewRef = useRef<HTMLDivElement>(null);
	const importRef = useRef<HTMLInputElement>(null);
	const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const canvasGridRef = useRef<HTMLCanvasElement>(null);
	useBgCanvas(canvasGridRef, { cy: 0.45, radius: 300 });

	useEffect(() => {
		saveToCache(data);
		setSaveIndicator(true);
		if (saveTimer.current) clearTimeout(saveTimer.current);
		saveTimer.current = setTimeout(() => setSaveIndicator(false), 1200);
	}, [data]);

	// ── Export ────────────────────────────────────────────────
	const handleExport = () => {
		const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `resume_${data.name.replace(/\s+/g, '_') || 'untitled'}_${new Date().toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
	};

	const handleImportClick = () => importRef.current?.click();

	const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = ev => {
			try {
				const parsed = JSON.parse(ev.target?.result as string);
				setData({ ...defaultData, ...parsed });
			} catch {
				alert('Invalid resume file. Please import a valid .json file.');
			}
		};
		reader.readAsText(file);
		e.target.value = '';
	};

	const handleReset = () => {
		if (window.confirm('Are you sure you want to reset your resume? This action cannot be undone.')) {
			setData(defaultData);
			localStorage.removeItem(CACHE_KEY);
		}
	};

	// ── Print ─────────────────────────────────────────────────
	const handlePrint = () => {
		const printContent = previewRef.current?.innerHTML;
		if (!printContent) return;
		const win = window.open('', '_blank');
		if (!win) return;
		win.document.write(`
            <!DOCTYPE html><html><head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body { margin: 0; padding: 0; }
                @media print {
                    @page { size: A4; margin: 0; }
                    body {
                        margin: 0; padding: 0;
                        width: 210mm; height: 297mm;
                        overflow: hidden;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .print-wrapper { width: 210mm; height: 297mm; overflow: hidden; }
                }
            </style>
            </head><body><div class="print-wrapper">${printContent}</div></body></html>
        `);
		win.document.close();
		setTimeout(() => win.print(), 600);
	};

	return (
		<div style={{
			display: 'flex',
			height: '100vh',
			background: '#04060c',
			overflow: 'hidden',
			fontFamily: "'DM Sans', sans-serif",
		}}>
			<canvas
				ref={canvasGridRef}
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
				}}
			/>

			<style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&display=swap');
                * { box-sizing: border-box; }
                ::-webkit-scrollbar { width: 4px; }
                ::-webkit-scrollbar-track { background: transparent; }
                ::-webkit-scrollbar-thumb { background: rgba(96,196,255,0.15); border-radius: 999px; }
                input[type="color"] { padding: 0; cursor: pointer; }
                textarea { resize: vertical; }
                @keyframes jdm-save-fade {
                    0% { opacity: 1; transform: translateY(0); }
                    70% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(-4px); }
                }
            `}</style>

			{/* Hidden import input */}
			<input
				ref={importRef}
				type="file"
				accept=".json,application/json"
				style={{ display: 'none' }}
				onChange={handleImportFile}
			/>

			<LeftPanel data={data} setData={setData} />

			{/* Right Panel */}
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
				<Toolbar
					layout={data.layout}
					scale={scale}
					setScale={setScale}
					onPrint={handlePrint}
					onExport={handleExport}
					onImport={handleImportClick}
					onReset={handleReset}
				/>

				{/* Auto-save indicator */}
				{saveIndicator && (
					<div style={{
						position: 'absolute',
						top: '3rem',
						right: '1.25rem',
						zIndex: 50,
						display: 'flex',
						alignItems: 'center',
						gap: '0.35rem',
						padding: '0.25rem 0.6rem',
						borderRadius: '999px',
						background: 'rgba(52,211,153,0.08)',
						border: '1px solid rgba(52,211,153,0.2)',
						animation: 'jdm-save-fade 1.2s ease forwards',
						pointerEvents: 'none',
					}}>
						<div style={{
							width: 4, height: 4, borderRadius: '50%',
							background: '#34d399',
							boxShadow: '0 0 5px rgba(52,211,153,0.8)',
						}} />
						<span style={{
							fontFamily: "'DM Mono', monospace",
							fontSize: '0.48rem',
							color: 'rgba(52,211,153,0.8)',
							letterSpacing: '0.12em',
							textTransform: 'uppercase',
						}}>
							Saved
						</span>
					</div>
				)}

				{/* Preview area */}
				<div style={{
					flex: 1,
					overflow: 'auto',
					padding: '2rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-start',
					background: `
                        radial-gradient(ellipse at 50% 0%, rgba(96,196,255,0.05) 0%, transparent 55%),
                        radial-gradient(ellipse at 0% 100%, rgba(167,139,250,0.03) 0%, transparent 40%),
                        radial-gradient(ellipse at 100% 50%, rgba(96,196,255,0.02) 0%, transparent 40%)
                    `,
				}}>
					{/* Scanline overlay on preview bg */}
					<div style={{
						position: 'absolute',
						inset: 0,
						backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(96,196,255,0.006) 3px, rgba(96,196,255,0.006) 4px)',
						pointerEvents: 'none',
						zIndex: 0,
					}} />

					<div style={{
						transformOrigin: 'top center',
						transform: `scale(${scale})`,
						width: '794px',
						height: '1123px',
						boxShadow: '0 8px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(96,196,255,0.1), 0 0 40px rgba(96,196,255,0.04)',
						borderRadius: '2px',
						overflow: 'hidden',
						marginBottom: `calc(${(1 - scale) * -100}% + 2rem)`,
						position: 'relative',
						zIndex: 1,
					}}>
						<div ref={previewRef}>
							<ResumePreview data={data} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}