import React from 'react';
import { ProductCollectionFilter } from 'frontend-shopify';
type TagFiltersProps = {
    filters: ProductCollectionFilter[];
    options: string[];
    handleClick: (value: string | number) => void;
};
declare const TagFilters: React.FC<TagFiltersProps>;
export default TagFilters;
