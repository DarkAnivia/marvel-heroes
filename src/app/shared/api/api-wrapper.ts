import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Generic REST ApiNative handler.
 */
export interface ApiResponse {
    /**
     * The status number of the response
     */
    status: number;
    /**
     * The data that is in the response. This property usually exists when a promise returned by
     * a request method resolves.
     */
    data?: any;
    /**
     * The headers of the response
     */
    headers: any;
    /**
     * Error response from the server. This property usually exists when a promise returned by a request method rejects.
     */
    error?: string;
}

@Injectable()
export abstract class ApiWrapper {
    public abstract get(
        endpoint: string,
        params?: any,
        headers?: any,
        omitBearer?: boolean
    ): Observable<ApiResponse>;

    public abstract post(
        endpoint: string,
        body: any,
        headers?: any,
        omitBearer?: boolean
    ): Observable<ApiResponse>;

    public abstract put(
        endpoint: string,
        body: any,
        headers?: any,
        omitBearer?: boolean
    ): Observable<ApiResponse>;

    public abstract delete(
        endpoint: string,
        headers?: any,
        omitBearer?: boolean
    ): Observable<ApiResponse>;

    public abstract patch(
        endpoint: string,
        body: any,
        headers?: any,
        omitBearer?: boolean
    ): Observable<ApiResponse>;
}
