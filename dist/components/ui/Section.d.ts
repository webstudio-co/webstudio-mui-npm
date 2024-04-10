import React from 'react';
type SectionProps = {
    children: React.ReactNode;
    bgcolor?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
    py?: number;
    px?: number;
};
declare const Section: React.FC<SectionProps>;
export default Section;
