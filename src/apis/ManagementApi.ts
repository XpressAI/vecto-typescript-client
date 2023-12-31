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
  ActionStatusResponse,
  AnalogyDTO,
  DataPage,
  ModelInformation,
  NewTokenRequest,
  NewVectorSpaceRequest,
  TokenDTO,
  TokenResponse,
  UpdateVectorSpaceRequest,
  UserDTO,
  VectorSpaceResponse,
} from '../models/index';
import {
    ActionStatusResponseFromJSON,
    ActionStatusResponseToJSON,
    AnalogyDTOFromJSON,
    AnalogyDTOToJSON,
    DataPageFromJSON,
    DataPageToJSON,
    ModelInformationFromJSON,
    ModelInformationToJSON,
    NewTokenRequestFromJSON,
    NewTokenRequestToJSON,
    NewVectorSpaceRequestFromJSON,
    NewVectorSpaceRequestToJSON,
    TokenDTOFromJSON,
    TokenDTOToJSON,
    TokenResponseFromJSON,
    TokenResponseToJSON,
    UpdateVectorSpaceRequestFromJSON,
    UpdateVectorSpaceRequestToJSON,
    UserDTOFromJSON,
    UserDTOToJSON,
    VectorSpaceResponseFromJSON,
    VectorSpaceResponseToJSON,
} from '../models/index';

export interface CreateAnalogyRequest {
    vectorSpaceId: number;
    analogyDTO?: AnalogyDTO;
}

export interface CreateTokenRequest {
    newTokenRequest?: NewTokenRequest;
}

export interface CreateVectorSpaceRequest {
    newVectorSpaceRequest?: NewVectorSpaceRequest;
}

export interface DeleteAnalogyRequest {
    id: number;
    vectorSpaceId: number;
}

export interface DeleteEntryRequest {
    vectorSpaceId: number;
    entryId: number;
}

export interface DeleteTokenRequest {
    id: number;
}

export interface DeleteVectorSpaceRequest {
    id: number;
}

export interface GetAnalogyRequest {
    id: number;
    vectorSpaceId: number;
}

export interface GetVectorSpaceRequest {
    id: number;
}

export interface ListAnalogiesRequest {
    vectorSpaceId: number;
}

export interface ListDataRequest {
    vectorSpaceId: number;
    limit?: number;
    offset?: number;
}

export interface UpdateVectorSpaceOperationRequest {
    id: number;
    updateVectorSpaceRequest?: UpdateVectorSpaceRequest;
}

/**
 * 
 */
export class ManagementApi extends runtime.BaseAPI {

    /**
     * Create a new analogy in vector space
     * Create new analogy
     */
    async createAnalogyRaw(requestParameters: CreateAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalogyDTO>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling createAnalogy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/space/{vector_space_id}/analogy`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AnalogyDTOToJSON(requestParameters.analogyDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalogyDTOFromJSON(jsonValue));
    }

    /**
     * Create a new analogy in vector space
     * Create new analogy
     */
    async createAnalogy(requestParameters: CreateAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalogyDTO> {
        const response = await this.createAnalogyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new access token
     * Create new token
     */
    async createTokenRaw(requestParameters: CreateTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenDTO>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewTokenRequestToJSON(requestParameters.newTokenRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenDTOFromJSON(jsonValue));
    }

    /**
     * Create a new access token
     * Create new token
     */
    async createToken(requestParameters: CreateTokenRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenDTO> {
        const response = await this.createTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new vector space
     * Create new vector space
     */
    async createVectorSpaceRaw(requestParameters: CreateVectorSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VectorSpaceResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/space`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewVectorSpaceRequestToJSON(requestParameters.newVectorSpaceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VectorSpaceResponseFromJSON(jsonValue));
    }

    /**
     * Create a new vector space
     * Create new vector space
     */
    async createVectorSpace(requestParameters: CreateVectorSpaceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VectorSpaceResponse> {
        const response = await this.createVectorSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete analogy in vector space
     * Delete analogy
     */
    async deleteAnalogyRaw(requestParameters: DeleteAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ActionStatusResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAnalogy.');
        }

        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling deleteAnalogy.');
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
        const response = await this.request({
            path: `/api/v0/account/space/{vector_space_id}/analogy/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActionStatusResponseFromJSON(jsonValue));
    }

    /**
     * Delete analogy in vector space
     * Delete analogy
     */
    async deleteAnalogy(requestParameters: DeleteAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ActionStatusResponse> {
        const response = await this.deleteAnalogyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an entry in a vector space
     * Delete an entry in a vector space
     */
    async deleteEntryRaw(requestParameters: DeleteEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling deleteEntry.');
        }

        if (requestParameters.entryId === null || requestParameters.entryId === undefined) {
            throw new runtime.RequiredError('entryId','Required parameter requestParameters.entryId was null or undefined when calling deleteEntry.');
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
        const response = await this.request({
            path: `/api/v0/space/{vector_space_id}/data/{entry_id}`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))).replace(`{${"entry_id"}}`, encodeURIComponent(String(requestParameters.entryId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an entry in a vector space
     * Delete an entry in a vector space
     */
    async deleteEntry(requestParameters: DeleteEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteEntryRaw(requestParameters, initOverrides);
    }

    /**
     * Delete access token
     * Delete token
     */
    async deleteTokenRaw(requestParameters: DeleteTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ActionStatusResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteToken.');
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
        const response = await this.request({
            path: `/api/v0/account/tokens/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActionStatusResponseFromJSON(jsonValue));
    }

    /**
     * Delete access token
     * Delete token
     */
    async deleteToken(requestParameters: DeleteTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ActionStatusResponse> {
        const response = await this.deleteTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete vector space specified by id
     * Delete vector space
     */
    async deleteVectorSpaceRaw(requestParameters: DeleteVectorSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ActionStatusResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteVectorSpace.');
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
        const response = await this.request({
            path: `/api/v0/account/space/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActionStatusResponseFromJSON(jsonValue));
    }

    /**
     * Delete vector space specified by id
     * Delete vector space
     */
    async deleteVectorSpace(requestParameters: DeleteVectorSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ActionStatusResponse> {
        const response = await this.deleteVectorSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get analogy in vector space
     * Get analogy
     */
    async getAnalogyRaw(requestParameters: GetAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalogyDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAnalogy.');
        }

        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling getAnalogy.');
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
        const response = await this.request({
            path: `/api/v0/account/space/{vector_space_id}/analogy/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalogyDTOFromJSON(jsonValue));
    }

    /**
     * Get analogy in vector space
     * Get analogy
     */
    async getAnalogy(requestParameters: GetAnalogyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalogyDTO> {
        const response = await this.getAnalogyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information about the logged in user
     * Logged in user information
     */
    async getUserInformationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTO>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Get information about the logged in user
     * Logged in user information
     */
    async getUserInformation(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTO> {
        const response = await this.getUserInformationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get vector space by id
     * Get vector space
     */
    async getVectorSpaceRaw(requestParameters: GetVectorSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VectorSpaceResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getVectorSpace.');
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
        const response = await this.request({
            path: `/api/v0/account/space/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VectorSpaceResponseFromJSON(jsonValue));
    }

    /**
     * Get vector space by id
     * Get vector space
     */
    async getVectorSpace(requestParameters: GetVectorSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VectorSpaceResponse> {
        const response = await this.getVectorSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of analogies in vector space
     * Get analogies
     */
    async listAnalogiesRaw(requestParameters: ListAnalogiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AnalogyDTO>>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling listAnalogies.');
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
        const response = await this.request({
            path: `/api/v0/account/space/{vector_space_id}/analogy`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AnalogyDTOFromJSON));
    }

    /**
     * Get a list of analogies in vector space
     * Get analogies
     */
    async listAnalogies(requestParameters: ListAnalogiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AnalogyDTO>> {
        const response = await this.listAnalogiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the attributes of all entries in the given vector space
     * List vector space entries
     */
    async listDataRaw(requestParameters: ListDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DataPage>> {
        if (requestParameters.vectorSpaceId === null || requestParameters.vectorSpaceId === undefined) {
            throw new runtime.RequiredError('vectorSpaceId','Required parameter requestParameters.vectorSpaceId was null or undefined when calling listData.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/space/{vector_space_id}/data`.replace(`{${"vector_space_id"}}`, encodeURIComponent(String(requestParameters.vectorSpaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DataPageFromJSON(jsonValue));
    }

    /**
     * List the attributes of all entries in the given vector space
     * List vector space entries
     */
    async listData(requestParameters: ListDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DataPage> {
        const response = await this.listDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all available models
     * List available models
     */
    async listModelsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelInformation>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/model`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelInformationFromJSON));
    }

    /**
     * List all available models
     * List available models
     */
    async listModels(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelInformation>> {
        const response = await this.listModelsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a list of tokens
     * Get tokens
     */
    async listTokensRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TokenResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/tokens`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TokenResponseFromJSON));
    }

    /**
     * Get a list of tokens
     * Get tokens
     */
    async listTokens(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TokenResponse>> {
        const response = await this.listTokensRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a list of vector spaces
     * Get vector spaces
     */
    async listVectorSpacesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VectorSpaceResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/space`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VectorSpaceResponseFromJSON));
    }

    /**
     * Get a list of vector spaces
     * Get vector spaces
     */
    async listVectorSpaces(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VectorSpaceResponse>> {
        const response = await this.listVectorSpacesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update vector space specified by id
     * Update vector space
     */
    async updateVectorSpaceRaw(requestParameters: UpdateVectorSpaceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VectorSpaceResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateVectorSpace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("SecurityScheme", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v0/account/space/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateVectorSpaceRequestToJSON(requestParameters.updateVectorSpaceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VectorSpaceResponseFromJSON(jsonValue));
    }

    /**
     * Update vector space specified by id
     * Update vector space
     */
    async updateVectorSpace(requestParameters: UpdateVectorSpaceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VectorSpaceResponse> {
        const response = await this.updateVectorSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
