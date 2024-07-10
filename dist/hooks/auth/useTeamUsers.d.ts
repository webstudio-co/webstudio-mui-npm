import React from 'react';
declare const useTeamUsers: () => {
    loading: boolean;
    delayedLoading: any;
    errors: Record<string, any>;
    teamUser: any;
    teamUsers: any[];
    findTeamUser: (id: import("frontend-js").ID) => any;
    findTeamUsers: (queryParams?: import("frontend-js").QueryParamsType, options?: import("frontend-js").FindManyOptionType) => Promise<any>;
    updateTeamUser: (resource: any) => any;
    createTeamUser: (resource: any) => any;
    deleteTeamUser: (id: import("frontend-js").ID) => Promise<any>;
    setTeamUser: (value: any) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadTeamUsers: () => Promise<any>;
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
};
export default useTeamUsers;
