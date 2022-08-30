import { BasicPropertiesFilter, FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioTriggerTypeFilter extends FilteringInformationHolder {
    eventCanonicalName?: string[];
    basicPropertiesFilter?: BasicPropertiesFilter;
}
