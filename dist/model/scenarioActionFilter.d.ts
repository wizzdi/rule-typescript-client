import { BasicPropertiesFilter, FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioActionFilter extends FilteringInformationHolder {
    dynamicExecutionIds?: string[];
    basicPropertiesFilter?: BasicPropertiesFilter;
}
