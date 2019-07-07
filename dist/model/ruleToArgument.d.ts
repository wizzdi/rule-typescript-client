import { Baseclass } from '@hanoch/fc_client';
import { FlexiCoreRule } from './flexiCoreRule';
import { FlexiCoreRuleArgument } from './flexiCoreRuleArgument';
export interface RuleToArgument extends Baseclass {
    ordinal?: number;
    flexiCoreRule?: FlexiCoreRule;
    flexiCoreRuleArgument?: FlexiCoreRuleArgument;
}
