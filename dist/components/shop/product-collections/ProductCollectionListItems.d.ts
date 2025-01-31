import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type ProductCollectionListItemsProps = {
    layout?: 'list' | 'grid' | 'slider';
    style?: 'list' | 'card' | 'avatar' | 'cover' | 'text';
    buttons: ButtonType[];
    displayFields: MetafieldType[];
    handleClick?: (resource: any) => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
    enableSharing?: boolean;
    slots?: {
        list?: any;
        item?: any;
    };
};
declare const ProductCollectionListItems: React.FC<ProductCollectionListItemsProps>;
export default ProductCollectionListItems;
