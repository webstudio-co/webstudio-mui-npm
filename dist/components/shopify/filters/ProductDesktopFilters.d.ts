import React from 'react';
import { ProductCollectionFilter } from 'frontend-shopify';
type CollectionFiltersProps = {
    filters: ProductCollectionFilter[];
    enableInStockFilter?: boolean;
    colorOptions?: string[];
    sizeOptions?: string[];
    styleOptions?: string[];
    materialOptions?: string[];
    vendorOptions?: string[];
    productTypeOptions?: string[];
    tagOptions?: string[];
    handleFilterColor: (value: string) => void;
    handleFilterSize: (value: string) => void;
    handleFilterStyle: (value: string) => void;
    handleFilterMaterial: (value: string) => void;
    handleFilterVendor: (value: string) => void;
    handleFilterProductType: (value: string) => void;
    handleFilterTag: (value: string) => void;
    handleFilterVariantOption?: (name: string, value: string | number) => void;
    handleFilterInStock?: () => void;
};
declare const CollectionFilters: React.FC<CollectionFiltersProps>;
export default CollectionFilters;
