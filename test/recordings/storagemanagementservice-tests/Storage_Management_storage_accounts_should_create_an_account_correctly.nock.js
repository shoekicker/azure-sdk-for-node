// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023?api-version=2017-10-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/fe9045d7-53e5-41e2-9b46-0942a7c61eb6?monitor=true&api-version=2017-10-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': 'e2d21c9a-927c-4afb-9a90-fe86f97ae755',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'e2d21c9a-927c-4afb-9a90-fe86f97ae755',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054913Z:e2d21c9a-927c-4afb-9a90-fe86f97ae755',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:49:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023?api-version=2017-10-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/fe9045d7-53e5-41e2-9b46-0942a7c61eb6?monitor=true&api-version=2017-10-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': 'e2d21c9a-927c-4afb-9a90-fe86f97ae755',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'e2d21c9a-927c-4afb-9a90-fe86f97ae755',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054913Z:e2d21c9a-927c-4afb-9a90-fe86f97ae755',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:49:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/fe9045d7-53e5-41e2-9b46-0942a7c61eb6?monitor=true&api-version=2017-10-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc6023\",\"properties\":{\"creationTime\":\"2017-12-12T05:49:13.4663391Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:49:13.5583436Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:49:13.5583436Z\"}}},\"networkAcls\":{\"bypass\":\"AzureServices\",\"defaultAction\":\"Allow\",\"ipRules\":[],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc6023.blob.core.windows.net/\",\"file\":\"https://testacc6023.file.core.windows.net/\",\"queue\":\"https://testacc6023.queue.core.windows.net/\",\"table\":\"https://testacc6023.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1061',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'dea625be-57bf-4e42-8608-4692c5a22ac5',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14647',
  'x-ms-correlation-request-id': 'dea625be-57bf-4e42-8608-4692c5a22ac5',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054944Z:dea625be-57bf-4e42-8608-4692c5a22ac5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/fe9045d7-53e5-41e2-9b46-0942a7c61eb6?monitor=true&api-version=2017-10-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc6023\",\"properties\":{\"creationTime\":\"2017-12-12T05:49:13.4663391Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:49:13.5583436Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:49:13.5583436Z\"}}},\"networkAcls\":{\"bypass\":\"AzureServices\",\"defaultAction\":\"Allow\",\"ipRules\":[],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc6023.blob.core.windows.net/\",\"file\":\"https://testacc6023.file.core.windows.net/\",\"queue\":\"https://testacc6023.queue.core.windows.net/\",\"table\":\"https://testacc6023.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1061',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'dea625be-57bf-4e42-8608-4692c5a22ac5',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14647',
  'x-ms-correlation-request-id': 'dea625be-57bf-4e42-8608-4692c5a22ac5',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054944Z:dea625be-57bf-4e42-8608-4692c5a22ac5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:49:44 GMT',
  connection: 'close' });
 return result; }]];