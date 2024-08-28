import React from 'react';
import { ButtonType, DisplayFieldType, FormFieldType, SearchFilterOptionType, SortOptionType, ToolbarButtonType } from '../../../types';
export type CollectionListProps = {
    grid?: boolean;
    selectable?: boolean;
    style: string;
    buttons: ButtonType[];
    displayFields: DisplayFieldType[];
    enableLikes?: boolean;
    enableFavorites?: boolean;
    enableRatings?: boolean;
    enableComments?: boolean;
    enableUsers?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableShow?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    enableAddToList?: boolean;
    fields?: FormFieldType[];
    toolbarButtons?: ToolbarButtonType[];
    headers?: {
        label: string;
        value: string;
    }[];
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    perPage?: number;
    loadMore?: boolean;
    list: React.FC<any>;
    component?: React.FC<any>;
    toolbar?: React.FC<any>;
    toolbarModal?: React.FC<any>;
    show?: React.FC<any>;
    edit?: React.FC<any>;
    create?: React.FC<any>;
    destroy?: React.FC<any>;
    empty?: React.FC<any>;
    slots?: {
        toolbar?: any;
        toolbarModal?: any;
        list?: any;
        show?: any;
        edit?: any;
        create?: any;
        destroy?: any;
        empty?: any;
        item?: any;
    };
    circular?: boolean;
    disableImage?: boolean;
    url: string;
    foreignUrl?: string;
    query?: any;
    resource: any;
    filterUser?: boolean;
    filterTeam?: boolean;
    filterSimilar?: boolean;
    filterGeo?: boolean;
};
declare const CollectionList: React.FC<CollectionListProps>;
export default CollectionList;
