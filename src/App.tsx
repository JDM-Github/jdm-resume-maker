import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/resume-maker";
import { motion } from "framer-motion";

function AnimatedBlobs() {
	return (
		<>
			<motion.div
				className="fixed top-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
				style={{ background: '#a78bfa', filter: 'blur(150px)', opacity: 0.15 }}
				animate={{ x: [0, 0, 0], y: [0, 200, 0] }}
				transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
			/>
			<motion.div
				className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
				style={{ background: '#34d399', filter: 'blur(120px)', opacity: 0.22 }}
				animate={{ x: [0, 150, 0], y: [0, -100, 0] }}
				transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
			/>
		</>
	);
}

export default function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-bg-base to-bg-base-2 text-text-primary font-sans relative overflow-x-hidden">
			<div className="relative z-10">
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
				<AnimatedBlobs />

			</div>
		</div>
	);
}
