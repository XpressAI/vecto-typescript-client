/* tslint:disable */
/* eslint-disable */
/**
 * Vecto API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@vecto.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  LookupResponse,
  Modality,
} from '../models/index';
import {
    LookupResponseFromJSON,
    LookupResponseToJSON,
    ModalityFromJSON,
    ModalityToJSON,
} from '../models/index';

export interface LookupRequest {
    vectorSpaceId: number;
    modality?: Modality;
    topK?: number;
    query?: any;
    ids?: Array<number>;
}

export interface LookupWithDynamicAnalogyRequest {
    vectorSpaceId: number;
    modality?: Modality;
    topK?: number;
    query?: any;
    start?: Array<Blob>;
    end?: Array<Blob>;
}

export interface LookupWithStoredAnalogyRequest {
    vectorSpaceId: number;
    id: string;
    modality?: Modality;
    topK?: number;
    query?: any;
    ids?: Array<number>;
}

/**
 * 
 */
export class LookupApi extends runtime.BaseAPI {

    /**
     * Search for the nearest vectors to the query in the provided vector space.
     * Search for the nearest vectors to the query
     */
    async lookupRaw(requestParameters: LookupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookupResponse>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling lookup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.modality !== undefined) {
            formParams.append('modality', new Blob([JSON.stringify(ModalityToJSON(requestParameters.modality))], { type: "application/json", }));
                    }

        if (requestParameters.topK !== undefined) {
            formParams.append('top_k', requestParameters.topK as any);
        }

        if (requestParameters.query !== undefined) {
            formParams.append('query', new Blob([JSON.stringify(anyToJSON(requestParameters.query))], { type: "application/json", }));
                    }

        if (requestParameters.ids) {
            formParams.append('ids', requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]));
        }

        const response = await this.request({
            path: `/api/v0/space/{vector_space_id}/lookup`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LookupResponseFromJSON(jsonValue));
    }

    /**
     * Search for the nearest vectors to the query in the provided vector space.
     * Search for the nearest vectors to the query
     */
    async lookup(requestParameters: LookupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookupResponse> {
        const response = await this.lookupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the word or image analogy by providing the query parameter and the analogy as the start and end parameter.For example: query=cat, start=dog, end=puppy and the expected output should be kitten
     * Get the word or image analogy
     */
    async lookupWithDynamicAnalogyRaw(requestParameters: LookupWithDynamicAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookupResponse>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling lookupWithDynamicAnalogy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.modality !== undefined) {
            formParams.append('modality', new Blob([JSON.stringify(ModalityToJSON(requestParameters.modality))], { type: "application/json", }));
                    }

        if (requestParameters.topK !== undefined) {
            formParams.append('top_k', requestParameters.topK as any);
        }

        if (requestParameters.query !== undefined) {
            formParams.append('query', new Blob([JSON.stringify(anyToJSON(requestParameters.query))], { type: "application/json", }));
                    }

        if (requestParameters.start) {
            requestParameters.start.forEach((element) => {
                formParams.append('start', element as any);
            })
        }

        if (requestParameters.end) {
            requestParameters.end.forEach((element) => {
                formParams.append('end', element as any);
            })
        }

        const response = await this.request({
            path: `/api/v0/space/{vector_space_id}/analogy`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LookupResponseFromJSON(jsonValue));
    }

    /**
     * Get the word or image analogy by providing the query parameter and the analogy as the start and end parameter.For example: query=cat, start=dog, end=puppy and the expected output should be kitten
     * Get the word or image analogy
     */
    async lookupWithDynamicAnalogy(requestParameters: LookupWithDynamicAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookupResponse> {
        const response = await this.lookupWithDynamicAnalogyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the word or image analogy by providing the query parameter and the analogy id in the path
     * Get the word or image analogy
     */
    async lookupWithStoredAnalogyRaw(requestParameters: LookupWithStoredAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookupResponse>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling lookupWithStoredAnalogy.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling lookupWithStoredAnalogy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.modality !== undefined) {
            formParams.append('modality', new Blob([JSON.stringify(ModalityToJSON(requestParameters.modality))], { type: "application/json", }));
                    }

        if (requestParameters.topK !== undefined) {
            formParams.append('top_k', requestParameters.topK as any);
        }

        if (requestParameters.query !== undefined) {
            formParams.append('query', new Blob([JSON.stringify(anyToJSON(requestParameters.query))], { type: "application/json", }));
                    }

        if (requestParameters.ids) {
            formParams.append('ids', requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]));
        }

        const response = await this.request({
            path: `/api/v0/space/{vector_space_id}/analogy/{id}`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LookupResponseFromJSON(jsonValue));
    }

    /**
     * Get the word or image analogy by providing the query parameter and the analogy id in the path
     * Get the word or image analogy
     */
    async lookupWithStoredAnalogy(requestParameters: LookupWithStoredAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookupResponse> {
        const response = await this.lookupWithStoredAnalogyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
