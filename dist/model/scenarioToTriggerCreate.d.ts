export interface ScenarioToTriggerCreate {
    name?: string;
    description?: string;
    scenarioTriggerId?: string;
    scenarioId?: string;
    enabled?: boolean;
    ordinal?: number;
    firing?: boolean;
}
