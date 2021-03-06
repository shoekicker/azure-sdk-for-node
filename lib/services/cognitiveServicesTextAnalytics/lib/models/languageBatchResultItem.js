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
 * Class representing a LanguageBatchResultItem.
 */
class LanguageBatchResultItem {
  /**
   * Create a LanguageBatchResultItem.
   * @property {string} [id] Unique, non-empty document identifier.
   * @property {array} [detectedLanguages] A list of extracted languages.
   * @property {object} [statistics] (Optional) if showStats=true was specified
   * in the request this field will contain information about the document
   * payload.
   * @property {number} [statistics.charactersCount] Number of text elements
   * recognized in the document.
   * @property {number} [statistics.transactionsCount] Number of transactions
   * for the document.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LanguageBatchResultItem
   *
   * @returns {object} metadata of LanguageBatchResultItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LanguageBatchResultItem',
      type: {
        name: 'Composite',
        className: 'LanguageBatchResultItem',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          detectedLanguages: {
            required: false,
            serializedName: 'detectedLanguages',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DetectedLanguageElementType',
                  type: {
                    name: 'Composite',
                    className: 'DetectedLanguage'
                  }
              }
            }
          },
          statistics: {
            required: false,
            serializedName: 'statistics',
            type: {
              name: 'Composite',
              className: 'DocumentStatistics'
            }
          }
        }
      }
    };
  }
}

module.exports = LanguageBatchResultItem;
