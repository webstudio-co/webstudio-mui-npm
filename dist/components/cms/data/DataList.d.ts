import React from 'react';
import { FormFieldType, QueryParamsType, MultiselectButtonType, SearchFilterOptionType, SortOptionType } from '../../../types';
export type DataListProps = {
    grid?: boolean;
    selectable?: boolean;
    sortable?: boolean;
    url: string;
    foreignUrl?: string;
    name: string;
    query?: QueryParamsType;
    resource?: any;
    fields: FormFieldType[];
    filterOptions: SearchFilterOptionType[];
    sortOptions: SortOptionType[];
    href?: string;
    enableSearch?: boolean;
    enableGeoSearch?: boolean;
    enableShow?: boolean;
    enableCreate?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableAddToList?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    perPage?: number;
    loadMore?: boolean;
    list?: React.FC<any>;
    sortableList?: React.FC<any>;
    toolbar?: React.FC<any>;
    toolbarModal?: React.FC<any>;
    show?: React.FC<any>;
    edit?: React.FC<any>;
    empty?: React.FC<any>;
    create?: React.FC<any>;
    destroy?: React.FC<any>;
    component?: React.FC<any>;
    buttons?: MultiselectButtonType[];
    slots?: {
        toolbar?: any;
        toolbarModal?: any;
        list?: any;
        item?: any;
        show?: any;
        edit?: any;
        create?: any;
        destroy?: any;
        empty?: any;
    };
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const DataList: React.FC<DataListProps>;
export default DataList;
