import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';

import { ScenarioTriggerType } from '../model/scenarioTriggerType';


import { BASE_PATH}                     from '../variables';
import { Configuration }                                     from '../configuration';
import { ScenarioTriggerTypeFilter } from '../model/scenarioTriggerTypeFilter';
import { PaginationResponse, FlexiCoreDecycle } from '@flexicore/flexicore-client';

@Injectable()
export class ScenarioTriggerTypeService 
{
    protected basePath = '/FlexiCore';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    constructor(protected httpClient: HttpClient,
         @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    public getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioTriggerType>>;
    public getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioTriggerType>>>;
    public getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioTriggerType>>>;
  
public getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter,
     authenticationKey?: string, observe: any = 'body', 
     reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<ScenarioTriggerType>>(`${this.basePath}/plugins/ScenarioTriggerType/getAllScenarioTriggerTypes`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o=>FlexiCoreDecycle.retrocycle(o));

    }

}