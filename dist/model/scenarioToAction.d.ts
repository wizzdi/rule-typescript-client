import { Baseclass } from '@hanoch/fc_client';
import { Scenario } from './scenario';
import { ScenarioAction } from './scenarioAction';
export interface ScenarioToAction extends Baseclass {
    scenario?: Scenario;
    scenarioAction?: ScenarioAction;
    enabled?: boolean;
}
