import { FilteringInformationHolder } from '@flexicore/flexicore-client';
import { ScenarioFilter } from './scenarioFilter';
export interface ScenarioActionFilter extends FilteringInformationHolder {
    scenarioFilter?: ScenarioFilter;
    connected?: boolean;
}
