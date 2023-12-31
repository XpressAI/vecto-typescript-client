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
 * @interface UpdateVectorSpaceRequest
 */
export interface UpdateVectorSpaceRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateVectorSpaceRequest
     */
    name?: string;
}

/**
 * Check if a given object implements the UpdateVectorSpaceRequest interface.
 */
export function instanceOfUpdateVectorSpaceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateVectorSpaceRequestFromJSON(json: any): UpdateVectorSpaceRequest {
    return UpdateVectorSpaceRequestFromJSONTyped(json, false);
}

export function UpdateVectorSpaceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateVectorSpaceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UpdateVectorSpaceRequestToJSON(value?: UpdateVectorSpaceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

