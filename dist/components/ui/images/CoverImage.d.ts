import React from 'react';
import { TypographyVariants } from 'types';
type CoverImageProps = {
    editing?: boolean;
    textVariant?: TypographyVariants;
    title?: string;
    description?: string;
    buttonText?: string;
    image?: string;
    height?: number;
    width?: number;
    objectFit?: 'cover' | 'contain';
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    opacity?: number;
    bgcolor?: string;
    href?: string;
};
declare const CoverImage: React.FC<CoverImageProps>;
export default CoverImage;
