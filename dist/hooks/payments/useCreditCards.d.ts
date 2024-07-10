import React from 'react';
import { CreditCardType } from '../../types';
declare const useCreditCards: () => {
    loading: boolean;
    delayedLoading: any;
    errors: Record<string, any>;
    creditCard: any;
    creditCards: any[];
    findCreditCard: (id: import("frontend-js").ID) => any;
    findCreditCards: (queryParams?: import("frontend-js").QueryParamsType, options?: import("frontend-js").FindManyOptionType) => Promise<any>;
    createCreditCard: (resource: any) => any;
    deleteCreditCard: (id: import("frontend-js").ID) => Promise<any>;
    selectCreditCard: (creditCardId: any) => Promise<CreditCardType>;
    setCreditCard: (value: any) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadCreditCards: () => Promise<any>;
    query: import("frontend-js").QueryParamsType;
    setQuery: (params: import("frontend-js").QueryParamsType) => void;
    page: number;
    numPages: number;
    perPage: number;
    totalCount: number;
    sortBy: any;
    sortDirection: any;
    handleSort: any;
    loadMore: () => void;
    loadingWrapper: (fn: () => void) => void;
    paginate: (page: number) => Promise<any>;
    removeAttachment: (id: import("frontend-js").ID, fieldName: string) => any;
};
export default useCreditCards;
