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
 * The object that represents the operation.
 *
 */
class OperationDisplay {
  /**
   * Create a OperationDisplay.
   * @member {string} [provider] Service provider: Microsoft.ResourceProvider
   * @member {string} [resource] Resource on which the operation is performed:
   * Profile, endpoint, etc.
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   * @member {string} [description] Description of operation
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationDisplay
   *
   * @returns {object} metadata of OperationDisplay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Operation_display',
      type: {
        name: 'Composite',
        className: 'OperationDisplay',
        modelProperties: {
          provider: {
            required: false,
            serializedName: 'Provider',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            serializedName: 'Resource',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            serializedName: 'Operation',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationDisplay;