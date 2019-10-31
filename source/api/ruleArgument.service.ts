import {Inject, Injectable, Optional} from "@angular/core";
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Configuration} from "../configuration";
import {BASE_PATH} from "../variables";
import {
    FlexiCoreRuleArgument,
    RuleArgumentCreate,
    RuleArgumentFilter,
    RuleArgumentUpdate
} from "..";
import {Observable} from "rxjs/Observable";
import {FlexiCoreDecycle, PaginationResponse} from "@flexicore/flexicore-client";

@Injectable()
export class RuleArgumentService {

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
     * createRuleArgument
     * Create Rule Argument
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRuleArgument(body?: RuleArgumentCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleArgument>;
    public createRuleArgument(body?: RuleArgumentCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleArgument>>;
    public createRuleArgument(body?: RuleArgumentCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleArgument>>;
    public createRuleArgument(body?: RuleArgumentCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<FlexiCoreRuleArgument>(`${this.basePath}/plugins/RuleArgument/createRuleArgument`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o => FlexiCoreDecycle.retrocycle(o));
    }

    /**
     * getAllRuleArgument
     * Get All Rule Arguments
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRuleArgument(body?: RuleArgumentFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<FlexiCoreRuleArgument>>;
    public getAllRuleArgument(body?: RuleArgumentFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<FlexiCoreRuleArgument>>>;
    public getAllRuleArgument(body?: RuleArgumentFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<FlexiCoreRuleArgument>>>;
    public getAllRuleArgument(body?: RuleArgumentFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.post<PaginationResponse<FlexiCoreRuleArgument>>(`${this.basePath}/plugins/RuleArgument/getAllRuleArgument`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o => FlexiCoreDecycle.retrocycle(o));
    }

    /**
     * updateRuleArgument
     * Update Rule Argument
     * @param body
     * @param authenticationKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRuleArgument(body?: RuleArgumentUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleArgument>;
    public updateRuleArgument(body?: RuleArgumentUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleArgument>>;
    public updateRuleArgument(body?: RuleArgumentUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleArgument>>;
    public updateRuleArgument(body?: RuleArgumentUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


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

        return this.httpClient.put<FlexiCoreRuleArgument>(`${this.basePath}/plugins/RuleArgument/updateRuleArgument`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).map(o => FlexiCoreDecycle.retrocycle(o));
    }

}
