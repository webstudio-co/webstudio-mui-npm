import React from 'react';
import { ActionType, DisplayFieldType } from '../../../types';
type CardStyleTypes = 'list' | 'card' | 'avatar' | 'cover' | 'table' | 'text';
type CollectionCardProps = {
    actions: ActionType[];
    style: CardStyleTypes;
    displayFields: DisplayFieldType[];
    resource: any & {
        label?: string;
        title?: string;
        subtitle?: string;
        image?: string;
        video?: string;
        description: string;
    };
    buttonText?: string;
    href?: string;
    handleClick: () => void;
    handleEdit?: (item: any) => void;
    handleDelete?: (item: any) => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    enableUsers?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableRatings?: boolean;
};
declare const CollectionCard: React.FC<CollectionCardProps>;
export default CollectionCard;
