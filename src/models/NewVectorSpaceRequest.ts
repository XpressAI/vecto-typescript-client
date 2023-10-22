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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewVectorSpaceRequest
 */
export interface NewVectorSpaceRequest {
    /**
     * 
     * @type {string}
     * @memberof NewVectorSpaceRequest
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof NewVectorSpaceRequest
     */
    modelId?: number;
}

/**
 * Check if a given object implements the NewVectorSpaceRequest interface.
 */
export function instanceOfNewVectorSpaceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NewVectorSpaceRequestFromJSON(json: any): NewVectorSpaceRequest {
    return NewVectorSpaceRequestFromJSONTyped(json, false);
}

export function NewVectorSpaceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewVectorSpaceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'modelId': !exists(json, 'modelId') ? undefined : json['modelId'],
    };
}

export function NewVectorSpaceRequestToJSON(value?: NewVectorSpaceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'modelId': value.modelId,
    };
}
