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
  IndexResponse,
  Modality,
} from '../models/index';
import {
    IndexResponseFromJSON,
    IndexResponseToJSON,
    ModalityFromJSON,
    ModalityToJSON,
} from '../models/index';

export interface IndexDataRequest {
    vectorSpaceId: number;
    modality?: Modality;
    attributes?: Array<string>;
    input?: Array<Blob>;
}

/**
 * 
 */
export class IndexApi extends runtime.BaseAPI {

    /**
     * Create an entry in the index for Image or Text data and store them in the provided vector space
     * Index the given data
     */
    async indexDataRaw(requestParameters: IndexDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IndexResponse>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling indexData.');
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
        let useForm = true;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.modality !== undefined) {
            formParams.append('modality', requestParameters.modality as any);
                    }

        if (requestParameters.attributes) {
            formParams.append('attributes', requestParameters.attributes.join(runtime.COLLECTION_FORMATS["csv"]));
        }

        if (requestParameters.input) {
            requestParameters.input.forEach((element) => {
                formParams.append('input', element as any);
            })
        }

        const response = await this.request({
            path: `/api/v0/space/{vector_space_id}/index`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IndexResponseFromJSON(jsonValue));
    }

    /**
     * Create an entry in the index for Image or Text data and store them in the provided vector space
     * Index the given data
     */
    async indexData(requestParameters: IndexDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IndexResponse> {
        const response = await this.indexDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
