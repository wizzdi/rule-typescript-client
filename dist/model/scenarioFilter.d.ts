import { BasicPropertiesFilter, FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioFilter extends FilteringInformationHolder {
    basicPropertiesFilter?: BasicPropertiesFilter;
    logFileResourceIds?: string[];
    evaluatingJSCodeIds?: string[];
    scenarioHint?: string[];
}
