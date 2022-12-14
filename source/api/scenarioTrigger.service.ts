/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V3.2.0
 * Contact: avishay@flexi-core.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders,
    HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScenarioTrigger } from '../model/scenarioTrigger';
import { ScenarioTriggerCreate } from '../model/scenarioTriggerCreate';
import { ScenarioTriggerUpdate } from '../model/scenarioTriggerUpdate';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { ScenarioTriggerFilter } from '../model/scenarioTriggerFilter';
import { PaginationResponse, FlexiCoreDecycle } from '@flexicore/flexicore-client';
import { FireScenarioTrigger } from '../model/fireScenarioTrigger';


@Injectable()
export class ScenarioTriggerService {

    protected basePath = '/FlexiCore';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createScenarioTrigger
     * create ScenarioTrigger
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createScenarioTrigger(body?: ScenarioTriggerCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTrigger>;
    public createScenarioTrigger(body?: ScenarioTriggerCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTrigger>>;
    public createScenarioTrigger(body?: ScenarioTriggerCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTrigger>>;
    public createScenarioTrigger(body?: ScenarioTriggerCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<ScenarioTrigger>(`${this.basePath}/ScenarioTrigger/createScenarioTrigger`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    public fireTrigger(body?: FireScenarioTrigger, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<void>;
    public fireTrigger(body?: FireScenarioTrigger, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<void>>;
    public fireTrigger(body?: FireScenarioTrigger, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<void>>;
    public fireTrigger(body?: FireScenarioTrigger, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {



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

        return this.httpClient.post<void>(`${this.basePath}/plugins/ScenarioTrigger/fireTrigger`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * getAllScenarioTriggers
     * get all ScenarioTriggers
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllScenarioTrigger(body?: ScenarioTriggerFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ScenarioTrigger>>;
    public getAllScenarioTrigger(body?: ScenarioTriggerFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ScenarioTrigger>>>;
    public getAllScenarioTrigger(body?: ScenarioTriggerFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ScenarioTrigger>>>;
    public getAllScenarioTrigger(body?: ScenarioTriggerFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<ScenarioTrigger>>(`${this.basePath}/ScenarioTrigger/getAllScenarioTriggers`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * updateScenarioTrigger
     * Update ScenarioTrigger
     * @param body 
     * @param authenticationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateScenarioTrigger(body?: ScenarioTriggerUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioTrigger>;
    public updateScenarioTrigger(body?: ScenarioTriggerUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioTrigger>>;
    public updateScenarioTrigger(body?: ScenarioTriggerUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioTrigger>>;
    public updateScenarioTrigger(body?: ScenarioTriggerUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<ScenarioTrigger>(`${this.basePath}/ScenarioTrigger/updateScenarioTrigger`,
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
