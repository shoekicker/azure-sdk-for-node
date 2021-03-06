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

/**
 * Details about an operation related to metrics.
 *
 */
class OperationMetricSpecification {
  /**
   * Create a OperationMetricSpecification.
   * @member {string} [name] The name of the metric.
   * @member {string} [displayName] Localized display name of the metric.
   * @member {string} [displayDescription] The description of the metric.
   * @member {string} [unit] The unit that the metric is measured in.
   * @member {string} [aggregationType] The type of metric aggregation.
   * @member {string} [enableRegionalMdmAccount] Whether or not the service is
   * using regional MDM accounts.
   * @member {string} [sourceMdmAccount] The name of the MDM account.
   * @member {string} [sourceMdmNamespace] The name of the MDM namespace.
   * @member {array} [availabilities] Defines how often data for metrics
   * becomes available.
   * @member {array} [dimensions] Defines the metric dimension.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationMetricSpecification
   *
   * @returns {object} metadata of OperationMetricSpecification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationMetricSpecification',
      type: {
        name: 'Composite',
        className: 'OperationMetricSpecification',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          displayDescription: {
            required: false,
            serializedName: 'displayDescription',
            type: {
              name: 'String'
            }
          },
          unit: {
            required: false,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          },
          aggregationType: {
            required: false,
            serializedName: 'aggregationType',
            type: {
              name: 'String'
            }
          },
          enableRegionalMdmAccount: {
            required: false,
            serializedName: 'enableRegionalMdmAccount',
            type: {
              name: 'String'
            }
          },
          sourceMdmAccount: {
            required: false,
            serializedName: 'sourceMdmAccount',
            type: {
              name: 'String'
            }
          },
          sourceMdmNamespace: {
            required: false,
            serializedName: 'sourceMdmNamespace',
            type: {
              name: 'String'
            }
          },
          availabilities: {
            required: false,
            serializedName: 'availabilities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationMetricAvailabilityElementType',
                  type: {
                    name: 'Composite',
                    className: 'OperationMetricAvailability'
                  }
              }
            }
          },
          dimensions: {
            required: false,
            serializedName: 'dimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationMetricDimensionElementType',
                  type: {
                    name: 'Composite',
                    className: 'OperationMetricDimension'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OperationMetricSpecification;
