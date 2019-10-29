import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PaginationResponse } from '@flexicore/flexicore-client';
import { RuleToArgument } from '../model/ruleToArgument';
import { RuleToArgumentCreate } from '../model/ruleToArgumentCreate';
import { RuleToArgumentHolderFilter } from '../model/ruleToArgumentHolderFilter';
import { RuleToArgumentUpdate } from '../model/ruleToArgumentUpdate';
import { Configuration } from '../configuration';
export declare class RuleToArgumentService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createRuleToArgument(body?: RuleToArgumentCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<RuleToArgument>;
    createRuleToArgument(body?: RuleToArgumentCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RuleToArgument>>;
    createRuleToArgument(body?: RuleToArgumentCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RuleToArgument>>;
    getAllRulesToExecutionParameter(body?: RuleToArgumentHolderFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<RuleToArgument>>;
    getAllRulesToExecutionParameter(body?: RuleToArgumentHolderFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<RuleToArgument>>>;
    getAllRulesToExecutionParameter(body?: RuleToArgumentHolderFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<RuleToArgument>>>;
    updateRuleToArgument(body?: RuleToArgumentUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<RuleToArgument>;
    updateRuleToArgument(body?: RuleToArgumentUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RuleToArgument>>;
    updateRuleToArgument(body?: RuleToArgumentUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RuleToArgument>>;
}
