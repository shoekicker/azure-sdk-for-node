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
 * @class
 * Initializes a new instance of the AzureIaaSComputeVMContainer class.
 * @constructor
 * IaaS VM workload-specific backup item representing a Resource
 * Manager-deployed virtual machine.
 *
 */
class AzureIaaSComputeVMContainer extends models['IaaSVMContainer'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureIaaSComputeVMContainer
   *
   * @returns {object} metadata of AzureIaaSComputeVMContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Microsoft.Compute/virtualMachines',
      type: {
        name: 'Composite',
        className: 'AzureIaaSComputeVMContainer',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql' ]
            }
          },
          registrationStatus: {
            required: false,
            serializedName: 'registrationStatus',
            type: {
              name: 'String'
            }
          },
          healthStatus: {
            required: false,
            serializedName: 'healthStatus',
            type: {
              name: 'String'
            }
          },
          containerType: {
            required: false,
            readOnly: true,
            serializedName: 'containerType',
            type: {
              name: 'String'
            }
          },
          protectableObjectType: {
            required: true,
            serializedName: 'protectableObjectType',
            type: {
              name: 'String'
            }
          },
          virtualMachineId: {
            required: false,
            serializedName: 'virtualMachineId',
            type: {
              name: 'String'
            }
          },
          virtualMachineVersion: {
            required: false,
            serializedName: 'virtualMachineVersion',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resourceGroup',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureIaaSComputeVMContainer;