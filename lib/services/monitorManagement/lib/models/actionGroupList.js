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
 * A list of action groups.
 */
class ActionGroupList extends Array {
  /**
   * Create a ActionGroupList.
   * @property {string} [nextLink] Provides the link to retrieve the next set
   * of elements.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ActionGroupList
   *
   * @returns {object} metadata of ActionGroupList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActionGroupList',
      type: {
        name: 'Composite',
        className: 'ActionGroupList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionGroupResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ActionGroupResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ActionGroupList;
