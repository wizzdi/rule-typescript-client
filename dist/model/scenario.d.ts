import { Baseclass, FileResource } from '@flexicore/flexicore-client';
import { FlexiCoreRule } from './flexiCoreRule';
export interface Scenario extends Baseclass {
    flexiCoreRule?: FlexiCoreRule;
    scenarioHint?: string;
    actionManagerScript?: FileResource;
    logFileResource?: FileResource;
}
