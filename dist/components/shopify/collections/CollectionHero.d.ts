import React from 'react';
import { TypographyVariants } from 'types';
type CollectionHeroProps = {
    handle: string;
    editing?: boolean;
    textVariant?: TypographyVariants;
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
declare const CollectionHero: React.FC<CollectionHeroProps>;
export default CollectionHero;
