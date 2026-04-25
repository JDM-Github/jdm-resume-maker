export const uid = () => Math.random().toString(36).slice(2, 8);

export const acAlpha = (ac: string, opacity: number) =>
    `${ac}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;