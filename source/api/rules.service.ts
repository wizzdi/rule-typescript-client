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

import {Inject, Injectable, Optional} from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


import { EvaluateRuleRequest } from '../model/evaluateRuleRequest';
import { EvaluateRuleResponse } from '../model/evaluateRuleResponse';
import { FlexiCoreRule } from '../model/flexiCoreRule';
import { FlexiCoreRuleLink } from '../model/flexiCoreRuleLink';
import { FlexiCoreRuleOp } from '../model/flexiCoreRuleOp';
import { PaginationResponse, FlexiCoreDecycle } from '@flexicore/flexicore-client';
import { RuleCreateOp } from '../model/ruleCreateOp';
import { RuleLinkCreate } from '../model/ruleLinkCreate';
import { RuleLinkFilter } from '../model/ruleLinkFilter';
import { RuleLinkUpdate } from '../model/ruleLinkUpdate';
import { RuleUpdate } from '../model/ruleUpdate';
import { RuleUpdateOp } from '../model/ruleUpdateOp';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';
import {RulesFilter} from '../model/rulesFilter';
import {RuleCreate} from "..";
import { ClearLogRequest } from '../model/clearLogRequest';


@Injectable()
export class RulesService {

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
     * createRuleLink
     * create Rule link
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRuleLink(body?: RuleLinkCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleLink>;
    public createRuleLink(body?: RuleLinkCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleLink>>;
    public createRuleLink(body?: RuleLinkCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleLink>>;
    public createRuleLink(body?: RuleLinkCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<FlexiCoreRuleLink>(`${this.basePath}/plugins/Rules/createRuleLink`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }


      /**
  

    /**
     * createRuleOp
     * create Rule op
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRuleOp(body?: RuleCreateOp, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleOp>;
    public createRuleOp(body?: RuleCreateOp, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleOp>>;
    public createRuleOp(body?: RuleCreateOp, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleOp>>;
    public createRuleOp(body?: RuleCreateOp, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<FlexiCoreRuleOp>(`${this.basePath}/plugins/Rules/createRuleOp`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * createRuleOp
     * create Rule op
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRule(body?: RuleCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRule>;
    public createRule(body?: RuleCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRule>>;
    public createRule(body?: RuleCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRule>>;
    public createRule(body?: RuleCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<FlexiCoreRuleOp>(`${this.basePath}/plugins/Rules/createRule`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * evaluateRule
     * Evaluate Rule
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaluateRule(body?: EvaluateRuleRequest, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<EvaluateRuleResponse>;
    public evaluateRule(body?: EvaluateRuleRequest, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EvaluateRuleResponse>>;
    public evaluateRule(body?: EvaluateRuleRequest, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EvaluateRuleResponse>>;
    public evaluateRule(body?: EvaluateRuleRequest, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<EvaluateRuleResponse>(`${this.basePath}/plugins/Rules/evaluateRule`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * getAllRuleLinks
     * getAllRuleLinks
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRuleLinks(body?: RuleLinkFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<FlexiCoreRuleLink>>;
    public getAllRuleLinks(body?: RuleLinkFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<FlexiCoreRuleLink>>>;
    public getAllRuleLinks(body?: RuleLinkFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<FlexiCoreRuleLink>>>;
    public getAllRuleLinks(body?: RuleLinkFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<FlexiCoreRuleLink>>(`${this.basePath}/plugins/Rules/getAllRuleLinks`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * getAllRules
     * create Rule
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRules(body?: RulesFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<FlexiCoreRule>>;
    public getAllRules(body?: RulesFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<FlexiCoreRule>>>;
    public getAllRules(body?: RulesFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<FlexiCoreRule>>>;
    public getAllRules(body?: RulesFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<FlexiCoreRule>>(`${this.basePath}/plugins/Rules/getAllRules`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * updateRule
     * Update Rule
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRule(body?: RuleUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRule>;
    public updateRule(body?: RuleUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRule>>;
    public updateRule(body?: RuleUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRule>>;
    public updateRule(body?: RuleUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<FlexiCoreRule>(`${this.basePath}/plugins/Rules/updateRule`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * updateRuleLink
     * update Rule link
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRuleLink(body?: RuleLinkUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleLink>;
    public updateRuleLink(body?: RuleLinkUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleLink>>;
    public updateRuleLink(body?: RuleLinkUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleLink>>;
    public updateRuleLink(body?: RuleLinkUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<FlexiCoreRuleLink>(`${this.basePath}/plugins/Rules/updateRuleLink`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * updateRuleOp
     * update Rule op
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRuleOp(body?: RuleUpdateOp, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleOp>;
    public updateRuleOp(body?: RuleUpdateOp, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleOp>>;
    public updateRuleOp(body?: RuleUpdateOp, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleOp>>;
    public updateRuleOp(body?: RuleUpdateOp, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<FlexiCoreRuleOp>(`${this.basePath}/plugins/Rules/updateRuleOp`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

}
