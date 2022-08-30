import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScenarioTriggerType } from '../model/scenarioTriggerType';
import { Configuration } from '../configuration';
import { ScenarioTriggerTypeFilter } from '../model/scenarioTriggerTypeFilter';
import { PaginationResponse } from '@flexicore/flexicore-client';
import { ScenarioTriggerTypeUpdate } from '../model/scenarioTriggerTypeUpdate';
import { ScenarioTriggerTypeCreate } from '../model/scenarioTriggerTypeCreate';
import { FireGenericTriggerResponse } from '../model/fireGenericTriggerResponse';
import { FireGenericTriggerRequest } from '../model/fireGenericTriggerRequest';
export declare class ScenarioTriggerTypeService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioTriggerType>>;
    getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioTriggerType>>>;
    getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioTriggerType>>>;
    updateScenarioTriggerType(body?: ScenarioTriggerTypeUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTriggerType>;
    updateScenarioTriggerType(body?: ScenarioTriggerTypeUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTriggerType>>;
    updateScenarioTriggerType(body?: ScenarioTriggerTypeUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTriggerType>>;
    createScenarioTriggerType(body?: ScenarioTriggerTypeCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTriggerType>;
    createScenarioTriggerType(body?: ScenarioTriggerTypeCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTriggerType>>;
    createScenarioTriggerType(body?: ScenarioTriggerTypeCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTriggerType>>;
    fireGenericTrigger(body?: FireGenericTriggerRequest, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FireGenericTriggerResponse>;
    fireGenericTrigger(body?: FireGenericTriggerRequest, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FireGenericTriggerResponse>>;
    fireGenericTrigger(body?: FireGenericTriggerRequest, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FireGenericTriggerResponse>>;
}
