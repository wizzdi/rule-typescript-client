declare enum sortingOrder {
    ASCENDING = 0,
    DECENDING = 1
}
export interface Sort {
    filteringId?: string;
    name?: string;
    sortingOrder?: sortingOrder.ASCENDING;
}
export {};
