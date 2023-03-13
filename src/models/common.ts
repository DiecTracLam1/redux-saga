export interface PaginationParams {
    _limit : number;
    _page : number;
    _total : number;
}

export interface ListRespone<T>{
    data: T[];
    pagination : PaginationParams;

}

export interface ListParams {
    _page : number;
    _limit : number;
    _sort : 'desc' | 'asc';
    
    [key: string]: any;
}