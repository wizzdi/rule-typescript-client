import { BasicPropertiesFilter, FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioToTriggerFilter extends FilteringInformationHolder {
    firing?: boolean;
    scenarioIds?: string[];
    scenarioTriggerIds?: string[];
    basicPropertiesFilter?: BasicPropertiesFilter;
    ordinal?: number[];
    enabled?: boolean;
    nonDeletedScenarios?: boolean;
}
