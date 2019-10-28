import { Baseclass } from '@flexicore/flexicore-client';
import { FlexiCoreRule } from './flexiCoreRule';
export interface Scenario extends Baseclass {
    flexiCoreRule?: FlexiCoreRule;
}
