import React from 'react';
type TableProps = {
    loading: boolean;
    headers: Array<any>;
    rows: Array<any>;
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSelect?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleClick: (value: any, row: any, field: any) => void;
    handleEdit: (row: any) => void;
    handleEditSelected: (items: any[]) => void;
    handleDelete: (items: any[]) => void;
    handlePublish: (items: any[]) => void;
    handleUnpublish: (items: any[]) => void;
    secondaryActions?: React.ReactNode;
    page?: number;
    perPage?: number;
    numPages?: number;
    totalCount?: number;
    query: any;
    handleQueryChange: (e: any) => void;
    handleClearQuery: () => void;
    handlePaginate: (page: number) => void;
    handleSearch: (keywords: any) => void;
    handleKeywordSearch: (keywords: string) => void;
    handleSort: (field: any) => void;
    disableBorderRadius?: boolean;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const Table: React.FC<TableProps>;
export default Table;
