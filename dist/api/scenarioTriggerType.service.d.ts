import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ScenarioTriggerType } from '../model/scenarioTriggerType';
import { Configuration } from '../configuration';
import { ScenarioTriggerTypeFilter } from '../model/scenarioTriggerTypeFilter';
import { PaginationResponse } from '@flexicore/flexicore-client';
export declare class ScenarioTriggerTypeService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioTriggerType>>;
    getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioTriggerType>>>;
    getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioTriggerType>>>;
}
