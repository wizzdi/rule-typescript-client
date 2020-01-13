import { Baseclass } from '@flexicore/flexicore-client';
import { Scenario } from './scenario';
import { ScenarioTrigger } from './scenarioTrigger';
import { TriggerManager } from './triggerManager';
export interface ScenarioToTrigger extends Baseclass {
    scenario?: Scenario;
    scenarioTrigger?: ScenarioTrigger;
    enabled?: boolean;
    triggerManager?: TriggerManager;
}
