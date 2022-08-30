export interface ScenarioTriggerCreate {
    name?: string;
    description?: string;
    lastEventId?: string;
    validFrom?: Date;
    cooldownIntervalMs?: number;
    logFileResourceId?: string;
    validTill?: Date;
    scenarioTriggerTypeId?: string;
    evaluatingJSCodeId?: string;
    activeTill?: Date;
    activeMs?: number;
}
