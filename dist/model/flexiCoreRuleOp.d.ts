import { FlexiCoreRule } from './flexiCoreRule';
import { RuleOpTypeEnum } from './ruleOpTypeEnum';
export interface FlexiCoreRuleOp extends FlexiCoreRule {
    ruleOpType?: RuleOpTypeEnum;
}
