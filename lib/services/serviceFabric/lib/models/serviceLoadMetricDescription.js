/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ServiceLoadMetricDescription class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {number} [serviceLoadMetricWeight]
 * 
 * @member {number} [primaryDefaultLoad]
 * 
 * @member {number} [secondaryDefaultLoad]
 * 
 */
function ServiceLoadMetricDescription() {
}

/**
 * Defines the metadata of ServiceLoadMetricDescription
 *
 * @returns {object} metadata of ServiceLoadMetricDescription
 *
 */
ServiceLoadMetricDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceLoadMetricDescription',
    type: {
      name: 'Composite',
      className: 'ServiceLoadMetricDescription',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'Name',
          type: {
            name: 'String'
          }
        },
        serviceLoadMetricWeight: {
          required: false,
          serializedName: 'ServiceLoadMetricWeight',
          type: {
            name: 'Number'
          }
        },
        primaryDefaultLoad: {
          required: false,
          serializedName: 'PrimaryDefaultLoad',
          type: {
            name: 'Number'
          }
        },
        secondaryDefaultLoad: {
          required: false,
          serializedName: 'SecondaryDefaultLoad',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = ServiceLoadMetricDescription;