/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * An Application Insights component available features.
 *
 */
class ApplicationInsightsComponentAvailableFeatures {
  /**
   * Create a ApplicationInsightsComponentAvailableFeatures.
   * @member {array} [result] A list of Application Insigths component feature.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationInsightsComponentAvailableFeatures
   *
   * @returns {object} metadata of ApplicationInsightsComponentAvailableFeatures
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationInsightsComponentAvailableFeatures',
      type: {
        name: 'Composite',
        className: 'ApplicationInsightsComponentAvailableFeatures',
        modelProperties: {
          result: {
            required: false,
            readOnly: true,
            serializedName: 'Result',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationInsightsComponentFeatureElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationInsightsComponentFeature'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationInsightsComponentAvailableFeatures;