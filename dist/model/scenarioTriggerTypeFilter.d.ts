import { BaseclassIdFiltering, FilteringInformationHolder, SortParameter } from '@flexicore/flexicore-client';
export interface ScenarioTriggerTypeFilter extends FilteringInformationHolder {
    id?: string;
    sort?: SortParameter[];
    nameLike?: string;
    fullTextLike?: string;
    likeCaseSensitive?: boolean;
    fromDate?: Date;
    toDate?: Date;
    pageSize?: number;
    currentPage?: number;
    resultType?: string;
    excludingIds?: string[];
    onlyIds?: string[];
    tenantIds?: BaseclassIdFiltering[];
    clazzIds?: BaseclassIdFiltering[];
    fetchSoftDelete?: boolean;
    permissionContextLike?: string;
    eventCanonicalNames?: string[];
}
