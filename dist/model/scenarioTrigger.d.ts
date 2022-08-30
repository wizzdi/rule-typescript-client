import { Baseclass } from '@flexicore/flexicore-client';
import { ScenarioTriggerType } from './scenarioTriggerType';
export interface ScenarioTrigger extends Baseclass {
    lastEventId?: string;
    lastActivated?: Date;
    validFrom?: Date;
    cooldownIntervalMs?: number;
    activeTill?: Date;
    activeMs?: number;
    logFileResource?: any;
    evaluatingJSCode?: any;
    scenarioTriggerType?: ScenarioTriggerType;
    validTill?: Date;
    javaType?: string;
}
