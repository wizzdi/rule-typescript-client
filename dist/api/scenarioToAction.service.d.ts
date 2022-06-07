import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationResponse } from '@flexicore/flexicore-client';
import { ScenarioToAction } from '../model/scenarioToAction';
import { ScenarioToActionCreate } from '../model/scenarioToActionCreate';
import { ScenarioToActionUpdate } from '../model/scenarioToActionUpdate';
import { Configuration } from '../configuration';
import { ScenarioToActionFilter } from '../model/scenarioToActionFilter';
export declare class ScenarioToActionService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createScenarioToAction(body?: ScenarioToActionCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioToAction>;
    createScenarioToAction(body?: ScenarioToActionCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioToAction>>;
    createScenarioToAction(body?: ScenarioToActionCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioToAction>>;
    getAllScenarioToAction(body?: ScenarioToActionFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioToAction>>;
    getAllScenarioToAction(body?: ScenarioToActionFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioToAction>>>;
    getAllScenarioToAction(body?: ScenarioToActionFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioToAction>>>;
    updateScenarioToAction(body?: ScenarioToActionUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioToAction>;
    updateScenarioToAction(body?: ScenarioToActionUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioToAction>>;
    updateScenarioToAction(body?: ScenarioToActionUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioToAction>>;
}
