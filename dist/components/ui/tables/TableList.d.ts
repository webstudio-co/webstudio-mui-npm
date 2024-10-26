import React from 'react';
type TableProps = {
    title?: string;
    loading: boolean;
    headers: any[];
    resources: any[];
    toolbar?: React.ReactNode;
    disableBorderRadius?: boolean;
    enableSelect?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    enableShow?: boolean;
    handleClick?: (value: any, row: any, field: any) => void;
    handleShow?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    page?: number;
    perPage?: number;
    numPages?: number;
    totalCount?: number;
    query: any;
    selected?: any;
    selectedIds?: any;
    handleSelect?: (row: any) => void;
    handleSelectAll: () => void;
    handleSort: (field: any) => void;
    handlePaginate: (page: number) => void;
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};
declare const TableList: React.FC<TableProps>;
export default TableList;
