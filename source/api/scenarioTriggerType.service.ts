import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders,
    HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScenarioTriggerType } from '../model/scenarioTriggerType';


import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { ScenarioTriggerTypeFilter } from '../model/scenarioTriggerTypeFilter';
import { PaginationResponse, FlexiCoreDecycle } from '@flexicore/flexicore-client';
import { ScenarioTriggerTypeUpdate } from '../model/scenarioTriggerTypeUpdate';
import { ScenarioTriggerTypeCreate } from '../model/scenarioTriggerTypeCreate';
import { FireGenericTriggerResponse } from '../model/fireGenericTriggerResponse';
import { FireGenericTriggerRequest } from '../model/fireGenericTriggerRequest';

@Injectable()
export class ScenarioTriggerTypeService {
    protected basePath = '/FlexiCore';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    constructor(protected httpClient: HttpClient,
        @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    public getAllScenarioTriggerTypes(body?: ScenarioTriggerTypeFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<PaginationResponse<ScenarioTriggerType>>(`${this.basePath}/ScenarioTriggerType/getAllScenarioTriggerTypes`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public updateScenarioTriggerType(body?: ScenarioTriggerTypeUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTriggerType>;
    public updateScenarioTriggerType(body?: ScenarioTriggerTypeUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTriggerType>>;
    public updateScenarioTriggerType(body?: ScenarioTriggerTypeUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTriggerType>>;
    public updateScenarioTriggerType(body?: ScenarioTriggerTypeUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<ScenarioTriggerType>(`${this.basePath}/ScenarioTriggerType/updateScenarioTriggerType`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public createScenarioTriggerType(body?: ScenarioTriggerTypeCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTriggerType>;
    public createScenarioTriggerType(body?: ScenarioTriggerTypeCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTriggerType>>;
    public createScenarioTriggerType(body?: ScenarioTriggerTypeCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTriggerType>>;
    public createScenarioTriggerType(body?: ScenarioTriggerTypeCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<ScenarioTriggerType>(`${this.basePath}/ScenarioTriggerType/createScenarioTriggerType`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public fireGenericTrigger(body?: FireGenericTriggerRequest, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FireGenericTriggerResponse>;
    public fireGenericTrigger(body?: FireGenericTriggerRequest, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FireGenericTriggerResponse>>;
    public fireGenericTrigger(body?: FireGenericTriggerRequest, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FireGenericTriggerResponse>>;
    public fireGenericTrigger(body?: FireGenericTriggerRequest, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<FireGenericTriggerResponse>(`${this.basePath}/ScenarioTriggerType/fireGenericTrigger`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

}