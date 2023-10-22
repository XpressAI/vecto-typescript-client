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
import type { TokenType } from './TokenType';
import {
    TokenTypeFromJSON,
    TokenTypeFromJSONTyped,
    TokenTypeToJSON,
} from './TokenType';

/**
 * 
 * @export
 * @interface NewTokenRequest
 */
export interface NewTokenRequest {
    /**
     * 
     * @type {TokenType}
     * @memberof NewTokenRequest
     */
    tokenType?: TokenType;
    /**
     * 
     * @type {string}
     * @memberof NewTokenRequest
     */
    name?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof NewTokenRequest
     */
    vectorSpaceIds?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof NewTokenRequest
     */
    allowsAccessToAllVectorSpaces?: boolean;
}

/**
 * Check if a given object implements the NewTokenRequest interface.
 */
export function instanceOfNewTokenRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NewTokenRequestFromJSON(json: any): NewTokenRequest {
    return NewTokenRequestFromJSONTyped(json, false);
}

export function NewTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenType': !exists(json, 'tokenType') ? undefined : TokenTypeFromJSON(json['tokenType']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'vectorSpaceIds': !exists(json, 'vectorSpaceIds') ? undefined : json['vectorSpaceIds'],
        'allowsAccessToAllVectorSpaces': !exists(json, 'allowsAccessToAllVectorSpaces') ? undefined : json['allowsAccessToAllVectorSpaces'],
    };
}

export function NewTokenRequestToJSON(value?: NewTokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tokenType': TokenTypeToJSON(value.tokenType),
        'name': value.name,
        'vectorSpaceIds': value.vectorSpaceIds,
        'allowsAccessToAllVectorSpaces': value.allowsAccessToAllVectorSpaces,
    };
}
