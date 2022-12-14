/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V3.2.0
 * Contact: avishay@flexi-core.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Baseclass } from '@flexicore/flexicore-client';
import { Scenario } from './scenario';
import { ScenarioTrigger } from './scenarioTrigger';



export interface ScenarioToTrigger extends Baseclass { 
    firing?: boolean;
    scenarioTrigger?: ScenarioTrigger;
    scenario?: Scenario;
    ordinal?: number;
    enabled?: boolean;
    javaType?: string;
}