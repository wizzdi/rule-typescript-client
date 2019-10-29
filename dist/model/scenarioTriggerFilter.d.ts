import { FilteringInformationHolder } from '@flexicore/flexicore-client';
import { ScenarioFilter } from './scenarioFilter';
export interface ScenarioTriggerFilter extends FilteringInformationHolder {
    scenarioFilter?: ScenarioFilter;
    connected?: boolean;
}
