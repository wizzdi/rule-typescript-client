enum sortingOrder 
{

    ASCENDING,
    DECENDING
}
export interface Sort 
{
    filteringId?: string,
    name?: string,
    sortingOrder?: sortingOrder.ASCENDING

}