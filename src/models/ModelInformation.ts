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
 * @interface ModelInformation
 */
export interface ModelInformation {
    /**
     * 
     * @type {number}
     * @memberof ModelInformation
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelInformation
     */
    modality?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelInformation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelInformation
     */
    description?: string;
}

/**
 * Check if a given object implements the ModelInformation interface.
 */
export function instanceOfModelInformation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelInformationFromJSON(json: any): ModelInformation {
    return ModelInformationFromJSONTyped(json, false);
}

export function ModelInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'modality': !exists(json, 'modality') ? undefined : json['modality'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ModelInformationToJSON(value?: ModelInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'modality': value.modality,
        'name': value.name,
        'description': value.description,
    };
}

