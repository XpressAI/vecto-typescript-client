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
 * @interface MetadataUpdateRequestDto
 */
export interface MetadataUpdateRequestDto {
    /**
     * id of the vector whose metadata should be changed
     * @type {Array<number>}
     * @memberof MetadataUpdateRequestDto
     */
    id?: Array<number>;
    /**
     * new attributes for the vector identified by id
     * @type {Array<string>}
     * @memberof MetadataUpdateRequestDto
     */
    attributes?: Array<string>;
}

/**
 * Check if a given object implements the MetadataUpdateRequestDto interface.
 */
export function instanceOfMetadataUpdateRequestDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetadataUpdateRequestDtoFromJSON(json: any): MetadataUpdateRequestDto {
    return MetadataUpdateRequestDtoFromJSONTyped(json, false);
}

export function MetadataUpdateRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataUpdateRequestDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
    };
}

export function MetadataUpdateRequestDtoToJSON(value?: MetadataUpdateRequestDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'attributes': value.attributes,
    };
}

