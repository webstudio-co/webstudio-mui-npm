import React from 'react';
export type ResourceListItemProps = {
    resource: any;
    handleClick: (resource: any) => void;
    handleEdit: (resource: any) => void;
    handleDelete: (resource: any) => void;
    color?: string;
    secondaryActions?: React.ReactNode;
    menuActions?: any;
    titleField?: string;
    descriptionField?: string;
    imageField?: string;
    iconField?: string;
};
declare const ResourceListItem: React.FC<ResourceListItemProps>;
export default ResourceListItem;
