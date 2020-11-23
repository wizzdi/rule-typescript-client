import { Baseclass,BaseclassIdFiltering,FilteringInformationHolder} from '@flexicore/flexicore-client';
import { ExcludeIds } from './excludeIds';
import { Includeds } from './includeIds';
import { Sort } from './sort';

export interface ScenarioTriggerTypeFilter extends FilteringInformationHolder
{
    id?: string;
    sort?: Sort[];
    nameLike?: string;
    fullTextLike?: string;
    likeCaseSensitive?: boolean;
    fromDate?: Date;
    toDate?: Date;
    pageSize?: number;
    currentPage?: number;
    resultType?: string;
    excludingIds?: ExcludeIds[];
    onlyIds?: Includeds[];
    tenantIds?: BaseclassIdFiltering[];
    clazzIds?: BaseclassIdFiltering[];
    fetchSoftDelete?: boolean;
    permissionContextLike?: string;
    eventCanonicalNames?: string[];
    

}

