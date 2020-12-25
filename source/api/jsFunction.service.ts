import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { BASE_PATH, FlexiCoreDecycle, PaginationResponse } from "@flexicore/flexicore-client";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../configuration";
import { JSFunctionFilter, JSFunctions } from "../model/models";

@Injectable()
export class JSFunctionService 
{
    protected basePath = '/FlexiCore';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    public getAllJSFunctions(body?: JSFunctionFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<JSFunctions>>;
    public getAllJSFunctions(body?: JSFunctionFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<JSFunctions>>>;
    public getAllJSFunctions(body?: JSFunctionFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<JSFunctions>>>;
    public getAllJSFunctions(body?: JSFunctionFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.post<PaginationResponse<JSFunctions>>(`${this.basePath}/plugins/JSFunction/getAllJSFunctions`,
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