import { BasicPropertiesFilter, FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioToActionFilter extends FilteringInformationHolder {
    enabled?: boolean;
    scenarioIds?: string[];
    scenarioActionIds?: string[];
    basicPropertiesFilter?: BasicPropertiesFilter;
}
