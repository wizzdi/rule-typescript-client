import { Baseclass } from '@flexicore/flexicore-client';
import { Scenario } from './scenario';
import { ScenarioTrigger } from './scenarioTrigger';
export interface ScenarioToTrigger extends Baseclass {
    firing?: boolean;
    scenarioTrigger?: ScenarioTrigger;
    scenario?: Scenario;
    ordinal?: number;
    enabled?: boolean;
    javaType?: string;
}
