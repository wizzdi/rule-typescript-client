import { FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioToTriggerFilter extends FilteringInformationHolder {
    enabled?: boolean;
    scenarioTriggerIds?: Array<string>;
    scenarioIds?: Array<string>;
}
