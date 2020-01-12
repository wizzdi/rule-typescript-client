import { Baseclass, FileResource } from '@flexicore/flexicore-client';
import { Scenario } from './scenario';
import { ScenarioTrigger } from './scenarioTrigger';
export interface ScenarioToTrigger extends Baseclass {
    scenario?: Scenario;
    scenarioTrigger?: ScenarioTrigger;
    enabled?: boolean;
    triggerManagerScript?: FileResource;
}
