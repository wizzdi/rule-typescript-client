import { Baseclass, FileResource } from '@flexicore/flexicore-client';
export interface Scenario extends Baseclass {
    evaluatingJSCode?: FileResource;
    logFileResource?: FileResource;
    scenarioHint?: string;
}
