import { Baseclass } from '@hanoch/fc_client';
import { FlexiCoreRule } from './flexiCoreRule';
import { FlexiCoreRuleOp } from './flexiCoreRuleOp';
export interface FlexiCoreRuleLink extends Baseclass {
    ruleToEval?: FlexiCoreRule;
    ruleOp?: FlexiCoreRuleOp;
}
