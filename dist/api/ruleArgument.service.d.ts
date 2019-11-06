import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Configuration } from "../configuration";
import { FlexiCoreRuleArgument, RuleArgumentCreate, RuleArgumentFilter, RuleArgumentUpdate } from "..";
import { Observable } from "rxjs/Observable";
import { PaginationResponse } from "@flexicore/flexicore-client";
export declare class RuleArgumentService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createRuleArgument(body?: RuleArgumentCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleArgument>;
    createRuleArgument(body?: RuleArgumentCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleArgument>>;
    createRuleArgument(body?: RuleArgumentCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleArgument>>;
    getAllRuleArgument(body?: RuleArgumentFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<FlexiCoreRuleArgument>>;
    getAllRuleArgument(body?: RuleArgumentFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<FlexiCoreRuleArgument>>>;
    getAllRuleArgument(body?: RuleArgumentFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<FlexiCoreRuleArgument>>>;
    updateRuleArgument(body?: RuleArgumentUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<FlexiCoreRuleArgument>;
    updateRuleArgument(body?: RuleArgumentUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexiCoreRuleArgument>>;
    updateRuleArgument(body?: RuleArgumentUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexiCoreRuleArgument>>;
}
