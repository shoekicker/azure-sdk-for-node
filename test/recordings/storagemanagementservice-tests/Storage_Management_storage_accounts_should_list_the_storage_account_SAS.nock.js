// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023/ListAccountSas?api-version=2017-10-01', '*')
  .reply(200, "{\"accountSasToken\":\"sv=2015-04-05&ss=bftq&srt=sco&sp=rdwlacup&st=2017-12-12T05%3A51%3A35Z&se=2017-12-12T06%3A51%3A35Z&spr=https,http&sig=HBRFg%2B6EtI0sgb%2BjX7jxz4caoUxs7i28x79UZiWdsvo%3D\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd48f2457-bc3a-48aa-9869-b6503a832c86',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd48f2457-bc3a-48aa-9869-b6503a832c86',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055136Z:d48f2457-bc3a-48aa-9869-b6503a832c86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:51:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023/ListAccountSas?api-version=2017-10-01', '*')
  .reply(200, "{\"accountSasToken\":\"sv=2015-04-05&ss=bftq&srt=sco&sp=rdwlacup&st=2017-12-12T05%3A51%3A35Z&se=2017-12-12T06%3A51%3A35Z&spr=https,http&sig=HBRFg%2B6EtI0sgb%2BjX7jxz4caoUxs7i28x79UZiWdsvo%3D\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd48f2457-bc3a-48aa-9869-b6503a832c86',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd48f2457-bc3a-48aa-9869-b6503a832c86',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055136Z:d48f2457-bc3a-48aa-9869-b6503a832c86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:51:35 GMT',
  connection: 'close' });
 return result; }]];