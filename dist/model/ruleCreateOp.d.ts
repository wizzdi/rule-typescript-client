import { RuleOpTypeEnum } from "./ruleOpTypeEnum";
export interface RuleCreateOp {
    name?: string;
    description?: string;
    ruleOpType?: RuleOpTypeEnum;
}
