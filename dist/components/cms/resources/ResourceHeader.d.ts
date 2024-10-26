import React from 'react';
import { SortOptionType, SearchFilterOptionType, FilterOptionType, SyntheticEventType } from '../../../types';
export type ResourceHeaderProps = {
    buttonText?: string;
    direction?: 'row' | 'column';
    enableSearch: boolean;
    enableFilters: boolean;
    enableSorting: boolean;
    enableCreate?: boolean;
    handleSearch: (keywords: string) => void;
    handleKeywordChange: (ev: SyntheticEventType) => void;
    handleFilter: (filter: FilterOptionType) => void;
    handleClearFilters: () => void;
    handleSort: (field: any) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
    handleAdd: () => void;
    handleReload?: () => void;
    keywords: string;
    activeFilters: FilterOptionType[];
    filterOptions: SearchFilterOptionType[];
    sortOptions: SortOptionType[];
    query: any;
    secondaryAction?: React.ReactNode;
};
declare const ResourceHeader: React.FC<ResourceHeaderProps>;
export default ResourceHeader;
