import { FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface RuleLinkFilter extends FilteringInformationHolder {
    ruleOpsIds?: Array<string>;
    rulesIds?: Array<string>;
}
