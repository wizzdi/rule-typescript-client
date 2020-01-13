import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PaginationResponse } from '@flexicore/flexicore-client';
import { TriggerManager } from '../model/triggerManager';
import { TriggerManagerCreate } from '../model/triggerManagerCreate';
import { TriggerManagerUpdate } from '../model/triggerManagerUpdate';
import { Configuration } from '../configuration';
import { TriggerManagerFilter } from '../model/triggerManagerFilter';
export declare class TriggerManagerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createTriggerManager(body?: TriggerManagerCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<TriggerManager>;
    createTriggerManager(body?: TriggerManagerCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TriggerManager>>;
    createTriggerManager(body?: TriggerManagerCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TriggerManager>>;
    getAllTriggerManager(body?: TriggerManagerFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<TriggerManager>>;
    getAllTriggerManager(body?: TriggerManagerFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<TriggerManager>>>;
    getAllTriggerManager(body?: TriggerManagerFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<TriggerManager>>>;
    updateTriggerManager(body?: TriggerManagerUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<TriggerManager>;
    updateTriggerManager(body?: TriggerManagerUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TriggerManager>>;
    updateTriggerManager(body?: TriggerManagerUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TriggerManager>>;
}
