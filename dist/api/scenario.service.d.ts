import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PaginationResponse } from '@flexicore/flexicore-client';
import { Scenario } from '../model/scenario';
import { ScenarioCreate } from '../model/scenarioCreate';
import { ScenarioUpdate } from '../model/scenarioUpdate';
import { Configuration } from '../configuration';
import { ScenarioFilter } from '../model/scenarioFilter';
import { ClearLogRequest } from '../model/models';
export declare class ScenarioService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    clearLog(body?: ClearLogRequest, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<void>;
    clearLog(body?: ClearLogRequest, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<void>>;
    clearLog(body?: ClearLogRequest, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<void>>;
    createScenario(body?: ScenarioCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Scenario>;
    createScenario(body?: ScenarioCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Scenario>>;
    createScenario(body?: ScenarioCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Scenario>>;
    getAllScenario(body?: ScenarioFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Scenario>>;
    getAllScenario(body?: ScenarioFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Scenario>>>;
    getAllScenario(body?: ScenarioFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Scenario>>>;
    updateScenario(body?: ScenarioUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Scenario>;
    updateScenario(body?: ScenarioUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Scenario>>;
    updateScenario(body?: ScenarioUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Scenario>>;
}
