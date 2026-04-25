import { ResumeData } from '../../types';
import ModernLayout from './layouts/ModernLayout';
import ClassicLayout from './layouts/ClassicLayout';
import CompactLayout from './layouts/CompactLayout';
import ModernLayoutPlus from './layouts/ModernLayoutPlus';

export default function ResumePreview({ data }: { data: ResumeData }) {
    if (data.layout === 'modern') return <ModernLayout data={data} />;
    if (data.layout === 'modern+') return <ModernLayoutPlus data={data} />;
    if (data.layout === 'classic') return <ClassicLayout data={data} />;
    return <CompactLayout data={data} />;
}