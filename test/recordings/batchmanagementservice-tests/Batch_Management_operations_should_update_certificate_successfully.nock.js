// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-cff2ab63c8c955aaf71989efa641b906558d9fb7?api-version=2018-12-01', '*')
  .reply(200, "{\"name\":\"SHA1-CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"type\":\"Microsoft.Batch/batchAccounts/certificates\",\"etag\":\"W/\\\"0x8D6775A1100B7EB\\\"\",\"properties\":{\"thumbprintAlgorithm\":\"SHA1\",\"thumbprint\":\"CFF2AB63C8C955AAF71989EFA641B906558D9FB7\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2019-01-11T00:16:43.5425606Z\",\"format\":\"Pfx\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 11 Jan 2019 00:16:43 GMT',
  etag: 'W/"0x8D6775A1100B7EB"',
  'x-ms-correlation-request-id': '0ba49b8a-7521-4bef-b53d-2a201c48b3a4',
  'x-ms-request-id': '84b10913-86b0-40cc-a098-d73024a53d03',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS2:20190111T001646Z:0ba49b8a-7521-4bef-b53d-2a201c48b3a4',
  date: 'Fri, 11 Jan 2019 00:16:46 GMT',
  connection: 'close' });
 return result; }]];