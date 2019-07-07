import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PaginationResponse } from '@hanoch/fc_client';
import { ScenarioAction } from '../model/scenarioAction';
import { ScenarioActionUpdate } from '../model/scenarioActionUpdate';
import { Configuration } from '../configuration';
import { ScenarioActionCreate } from '../model/scenarioActionCreate';
import { ScenarioActionFilter } from '../model/scenarioActionFilter';
export declare class ScenarioActionService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createScenarioAction(body?: ScenarioActionCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioAction>;
    createScenarioAction(body?: ScenarioActionCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioAction>>;
    createScenarioAction(body?: ScenarioActionCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioAction>>;
    getAllScenarioAction(body?: ScenarioActionFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioAction>>;
    getAllScenarioAction(body?: ScenarioActionFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioAction>>>;
    getAllScenarioAction(body?: ScenarioActionFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioAction>>>;
    updateScenarioAction(body?: ScenarioActionUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioAction>;
    updateScenarioAction(body?: ScenarioActionUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioAction>>;
    updateScenarioAction(body?: ScenarioActionUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioAction>>;
}
