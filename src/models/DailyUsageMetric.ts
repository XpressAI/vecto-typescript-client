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
 * @interface DailyUsageMetric
 */
export interface DailyUsageMetric {
    /**
     * 
     * @type {Date}
     * @memberof DailyUsageMetric
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof DailyUsageMetric
     */
    count?: number;
    /**
     * 
     * @type {number}
     * @memberof DailyUsageMetric
     */
    cumulativeCount?: number;
}

/**
 * Check if a given object implements the DailyUsageMetric interface.
 */
export function instanceOfDailyUsageMetric(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DailyUsageMetricFromJSON(json: any): DailyUsageMetric {
    return DailyUsageMetricFromJSONTyped(json, false);
}

export function DailyUsageMetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyUsageMetric {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'cumulativeCount': !exists(json, 'cumulativeCount') ? undefined : json['cumulativeCount'],
    };
}

export function DailyUsageMetricToJSON(value?: DailyUsageMetric | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0,10)),
        'count': value.count,
        'cumulativeCount': value.cumulativeCount,
    };
}

