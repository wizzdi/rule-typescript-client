import { Baseclass } from '@flexicore/flexicore-client';
import { Scenario } from './scenario';
import { ScenarioAction } from './scenarioAction';
export interface ScenarioToAction extends Baseclass {
    enabled?: boolean;
    scenarioAction?: ScenarioAction;
    scenario?: Scenario;
    javaType?: string;
}
