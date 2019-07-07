import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ScenarioToTrigger } from '../model/scenarioToTrigger';
import { ScenarioToTriggerCreate } from '../model/scenarioToTriggerCreate';
import { ScenarioToTriggerUpdate } from '../model/scenarioToTriggerUpdate';
import { Configuration } from '../configuration';
import { ScenarioToTriggerFilter } from '../model/scenarioToTriggerFilter';
import { PaginationResponse } from '@hanoch/fc_client';
export declare class ScenarioToTriggerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createScenarioToTrigger(body?: ScenarioToTriggerCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioToTrigger>;
    createScenarioToTrigger(body?: ScenarioToTriggerCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioToTrigger>>;
    createScenarioToTrigger(body?: ScenarioToTriggerCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioToTrigger>>;
    getAllScenarioToTrigger(body?: ScenarioToTriggerFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioToTrigger>>;
    getAllScenarioToTrigger(body?: ScenarioToTriggerFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioToTrigger>>>;
    getAllScenarioToTrigger(body?: ScenarioToTriggerFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioToTrigger>>>;
    updateScenarioToTrigger(body?: ScenarioToTriggerUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioToTrigger>;
    updateScenarioToTrigger(body?: ScenarioToTriggerUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioToTrigger>>;
    updateScenarioToTrigger(body?: ScenarioToTriggerUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioToTrigger>>;
}
