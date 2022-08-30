import { BasicPropertiesFilter, FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioTriggerFilter extends FilteringInformationHolder {
    lastEventId?: string[];
    lastActivated?: Date[];
    validFrom?: Date[];
    cooldownIntervalMs?: number[];
    logFileResourceIds?: string[];
    validTill?: Date[];
    scenarioTriggerTypeIds?: string[];
    evaluatingJSCodeIds?: string[];
    activeTill?: Date[];
    activeMs?: number[];
    basicPropertiesFilter?: BasicPropertiesFilter;
    eventCanonicalNames?: string[];
}
