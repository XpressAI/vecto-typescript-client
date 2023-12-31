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
 * @interface TokenDTO
 */
export interface TokenDTO {
    /**
     * 
     * @type {number}
     * @memberof TokenDTO
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof TokenDTO
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof TokenDTO
     */
    name?: string;
    /**
     * 
     * @type {TokenType}
     * @memberof TokenDTO
     */
    tokenType?: TokenType;
    /**
     * 
     * @type {boolean}
     * @memberof TokenDTO
     */
    allowsAccessToAllVectorSpaces?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TokenDTO
     */
    token?: string;
    /**
     * 
     * @type {Date}
     * @memberof TokenDTO
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TokenDTO
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Array<number>}
     * @memberof TokenDTO
     */
    vectorSpacesIds?: Array<number>;
}

/**
 * Check if a given object implements the TokenDTO interface.
 */
export function instanceOfTokenDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TokenDTOFromJSON(json: any): TokenDTO {
    return TokenDTOFromJSONTyped(json, false);
}

export function TokenDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tokenType': !exists(json, 'tokenType') ? undefined : TokenTypeFromJSON(json['tokenType']),
        'allowsAccessToAllVectorSpaces': !exists(json, 'allowsAccessToAllVectorSpaces') ? undefined : json['allowsAccessToAllVectorSpaces'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'vectorSpacesIds': !exists(json, 'vectorSpacesIds') ? undefined : json['vectorSpacesIds'],
    };
}

export function TokenDTOToJSON(value?: TokenDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'accountId': value.accountId,
        'name': value.name,
        'tokenType': TokenTypeToJSON(value.tokenType),
        'allowsAccessToAllVectorSpaces': value.allowsAccessToAllVectorSpaces,
        'token': value.token,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'vectorSpacesIds': value.vectorSpacesIds,
    };
}

