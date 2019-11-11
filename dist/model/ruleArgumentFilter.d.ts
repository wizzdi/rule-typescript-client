import { FilteringInformationHolder } from '@flexicore/flexicore-client';
import { RulesFilter } from './rulesFilter';
export interface RuleArgumentFilter extends FilteringInformationHolder {
    rulesFilter?: RulesFilter;
    connected?: boolean;
}
