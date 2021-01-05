export interface ScenarioTriggerCreate {
    name?: string;
    description?: string;
    tenantId?: string;
    softDelete?: boolean;
    validFrom?: string;
    validTill?: string;
    scenarioTriggerTypeId?: string;
    evaluatingJSCodeId?: string;
    activeMs?: bigint;
    cooldownIntervalMs?: bigint;
    eventCanonicalClassName?: string;
}
