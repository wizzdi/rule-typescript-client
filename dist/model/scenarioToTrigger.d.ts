import { Baseclass } from '@hanoch/fc_client';
import { Scenario } from './scenario';
import { ScenarioTrigger } from './scenarioTrigger';
export interface ScenarioToTrigger extends Baseclass {
    scenario?: Scenario;
    scenarioTrigger?: ScenarioTrigger;
}
