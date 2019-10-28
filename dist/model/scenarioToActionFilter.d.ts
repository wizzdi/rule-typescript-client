import { FilteringInformationHolder } from '@flexicore/flexicore-client';
export interface ScenarioToActionFilter extends FilteringInformationHolder {
    enabled?: boolean;
    actionsIds?: Array<string>;
    scenarioIds?: Array<string>;
}
