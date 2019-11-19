import { Baseclass, FileResource } from '@flexicore/flexicore-client';
export interface FlexiCoreRule extends Baseclass {
    evaluationScript?: FileResource;
    logFileResource?: FileResource;
}
