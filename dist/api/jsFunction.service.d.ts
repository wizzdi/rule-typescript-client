import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { PaginationResponse } from "@flexicore/flexicore-client";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../configuration";
import { JSFunctionCreate, JSFunctionFilter, JSFunctions } from "../model/models";
export declare class JSFunctionService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    getAllJSFunctions(body?: JSFunctionFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<JSFunctions>>;
    getAllJSFunctions(body?: JSFunctionFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<JSFunctions>>>;
    getAllJSFunctions(body?: JSFunctionFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<JSFunctions>>>;
    createJSFunction(body?: JSFunctionCreate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
}
