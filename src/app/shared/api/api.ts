import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, ApiWrapper } from './api-wrapper';
import { environment } from 'src/environments/environment';

/**
 * Generic REST ApiNative handler.
 */

const API_AUTH = {apikey:'302e2db61e1f8a290e6b3f0439a8c382'};

@Injectable()
export class Api extends ApiWrapper {

    constructor(public http: HttpClient) {
        super();
    }

    public get(
        endpoint: string,
        params?: any,
        headers?: any
    ): Observable<ApiResponse> {
        const options: any = {
            observe: 'response',
            headers: new HttpHeaders(headers),
            params: this.genParams(params),
        };

        return this.http.get<any>(environment.baseUrl + endpoint, options).pipe(
            map((response: HttpResponse<any>) => {
                return this.transformResponse(response);
            })
        );
    }

    public post(
        endpoint: string,
        body: any,
        headers?: any,
    ): Observable<ApiResponse> {
        let headerP = new HttpHeaders(headers);

        const options: any = {
            observe: 'response',
            headers: new HttpHeaders(headers),
        };
        return this.http.post<any>(environment.baseUrl + endpoint, body, options).pipe(
            map((response: HttpResponse<any>) => {
                return this.transformResponse(response);
            })
        );
    }

    public put(
        endpoint: string,
        body: any,
        headers?: any,
    ): Observable<ApiResponse> {
        const options: any = {
            observe: 'response',
            headers: new HttpHeaders(headers),
        };
        return this.http.put<any>(environment.baseUrl + endpoint, body, options).pipe(
            map((response: HttpResponse<any>) => {
                return this.transformResponse(response);
            })
        );
    }

    public delete(
        endpoint: string,
        headers?: any,
    ): Observable<ApiResponse> {
        const options: any = {
            observe: 'response',
            headers: new HttpHeaders(headers),
        };
        return this.http.delete<any>(environment.baseUrl + endpoint, options).pipe(
            map((response: HttpResponse<any>) => {
                return this.transformResponse(response);
            })
        );
    }

    public patch(
        endpoint: string,
        body: any,
        headers?: any,
    ): Observable<ApiResponse> {
        const options: any = {
            observe: 'response',
            headers: new HttpHeaders(headers),
        };
        return this.http.patch<any>(environment.baseUrl + endpoint, body, options).pipe(
            map((response: HttpResponse<any>) => {
                return this.transformResponse(response);
            })
        );
    }

    private transformResponse(response: HttpResponse<any>): ApiResponse {
        return {
            data: response.body,
            headers: response.headers,
            status: response.status,
        };
    }

    private genParams(params: Object){
        return {...API_AUTH, ...params}
    }
}
