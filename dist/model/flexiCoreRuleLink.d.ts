import { Baseclass } from '@flexicore/flexicore-client';
import { FlexiCoreRule } from './flexiCoreRule';
import { FlexiCoreRuleOp } from './flexiCoreRuleOp';
export interface FlexiCoreRuleLink extends Baseclass {
    ruleToEval?: FlexiCoreRule;
    ruleOp?: FlexiCoreRuleOp;
}
