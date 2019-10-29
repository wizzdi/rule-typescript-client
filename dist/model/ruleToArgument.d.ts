import { Baseclass } from '@flexicore/flexicore-client';
import { FlexiCoreRule } from './flexiCoreRule';
import { FlexiCoreRuleArgument } from './flexiCoreRuleArgument';
export interface RuleToArgument extends Baseclass {
    ordinal?: number;
    flexiCoreRule?: FlexiCoreRule;
    flexiCoreRuleArgument?: FlexiCoreRuleArgument;
}
