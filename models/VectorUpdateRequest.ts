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
import type { Modality } from './Modality';
import {
    ModalityFromJSON,
    ModalityFromJSONTyped,
    ModalityToJSON,
} from './Modality';

/**
 * 
 * @export
 * @interface VectorUpdateRequest
 */
export interface VectorUpdateRequest {
    /**
     * 
     * @type {Modality}
     * @memberof VectorUpdateRequest
     */
    modality?: Modality;
    /**
     * id of the vector whose embeddings should be changed
     * @type {Array<number>}
     * @memberof VectorUpdateRequest
     */
    id?: Array<number>;
    /**
     * Input as binary data
     * @type {Array<Blob>}
     * @memberof VectorUpdateRequest
     */
    input?: Array<Blob>;
}

/**
 * Check if a given object implements the VectorUpdateRequest interface.
 */
export function instanceOfVectorUpdateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VectorUpdateRequestFromJSON(json: any): VectorUpdateRequest {
    return VectorUpdateRequestFromJSONTyped(json, false);
}

export function VectorUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VectorUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'modality': !exists(json, 'modality') ? undefined : ModalityFromJSON(json['modality']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'input': !exists(json, 'input') ? undefined : json['input'],
    };
}

export function VectorUpdateRequestToJSON(value?: VectorUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'modality': ModalityToJSON(value.modality),
        'id': value.id,
        'input': value.input,
    };
}

