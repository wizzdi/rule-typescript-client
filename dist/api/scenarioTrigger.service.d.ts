import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScenarioTrigger } from '../model/scenarioTrigger';
import { ScenarioTriggerCreate } from '../model/scenarioTriggerCreate';
import { ScenarioTriggerUpdate } from '../model/scenarioTriggerUpdate';
import { Configuration } from '../configuration';
import { ScenarioTriggerFilter } from '../model/scenarioTriggerFilter';
import { PaginationResponse } from '@flexicore/flexicore-client';
import { FireScenarioTrigger } from '../model/fireScenarioTrigger';
export declare class ScenarioTriggerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createScenarioTrigger(body?: ScenarioTriggerCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTrigger>;
    createScenarioTrigger(body?: ScenarioTriggerCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTrigger>>;
    createScenarioTrigger(body?: ScenarioTriggerCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTrigger>>;
    fireTrigger(body?: FireScenarioTrigger, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<void>;
    fireTrigger(body?: FireScenarioTrigger, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<void>>;
    fireTrigger(body?: FireScenarioTrigger, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<void>>;
    getAllScenarioTrigger(body?: ScenarioTriggerFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioTrigger>>;
    getAllScenarioTrigger(body?: ScenarioTriggerFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioTrigger>>>;
    getAllScenarioTrigger(body?: ScenarioTriggerFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioTrigger>>>;
    updateScenarioTrigger(body?: ScenarioTriggerUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTrigger>;
    updateScenarioTrigger(body?: ScenarioTriggerUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTrigger>>;
    updateScenarioTrigger(body?: ScenarioTriggerUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTrigger>>;
}
