// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2018-04-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '74622ce6-68bb-47fc-b691-0d3c541059a0',
  'x-ms-correlation-request-id': '74622ce6-68bb-47fc-b691-0d3c541059a0',
  'x-ms-routing-request-id': 'WESTUS:20170502T195225Z:74622ce6-68bb-47fc-b691-0d3c541059a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2018-04-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '74622ce6-68bb-47fc-b691-0d3c541059a0',
  'x-ms-correlation-request-id': '74622ce6-68bb-47fc-b691-0d3c541059a0',
  'x-ms-routing-request-id': 'WESTUS:20170502T195225Z:74622ce6-68bb-47fc-b691-0d3c541059a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:24 GMT',
  connection: 'close' });
 return result; }]];