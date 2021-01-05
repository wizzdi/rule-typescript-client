import { Baseclass } from "@flexicore/flexicore-client";
export interface JSFunctionCreate extends Baseclass {
    systemObject?: boolean;
    evaluatingJSCodeId?: string;
    methodName?: string;
    returType?: string;
    noSql?: boolean;
    dtype?: string;
}
