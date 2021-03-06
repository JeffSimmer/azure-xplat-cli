// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate3073/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '4103e5f7-cf52-4b85-baac-710bbf41a46b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd81503ec-c548-43ed-a265-36a0fa6c84c0',
  'x-ms-routing-request-id': 'WESTUS:20160419T202957Z:d81503ec-c548-43ed-a265-36a0fa6c84c0',
  date: 'Tue, 19 Apr 2016 20:29:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate3073/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '4103e5f7-cf52-4b85-baac-710bbf41a46b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd81503ec-c548-43ed-a265-36a0fa6c84c0',
  'x-ms-routing-request-id': 'WESTUS:20160419T202957Z:d81503ec-c548-43ed-a265-36a0fa6c84c0',
  date: 'Tue, 19 Apr 2016 20:29:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"4103e5f7-cf52-4b85-baac-710bbf41a46b\",\r\n  \"startTime\": \"2016-04-19T20:29:56.6527687+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '5d764143-bd75-4534-9a5d-7ad83aa7cf9b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14945',
  'x-ms-correlation-request-id': '83ae6a96-0ce9-41cf-8efb-77fa964eaabd',
  'x-ms-routing-request-id': 'CENTRALUS:20160419T203028Z:83ae6a96-0ce9-41cf-8efb-77fa964eaabd',
  date: 'Tue, 19 Apr 2016 20:30:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"4103e5f7-cf52-4b85-baac-710bbf41a46b\",\r\n  \"startTime\": \"2016-04-19T20:29:56.6527687+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '5d764143-bd75-4534-9a5d-7ad83aa7cf9b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14945',
  'x-ms-correlation-request-id': '83ae6a96-0ce9-41cf-8efb-77fa964eaabd',
  'x-ms-routing-request-id': 'CENTRALUS:20160419T203028Z:83ae6a96-0ce9-41cf-8efb-77fa964eaabd',
  date: 'Tue, 19 Apr 2016 20:30:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"4103e5f7-cf52-4b85-baac-710bbf41a46b\",\r\n  \"startTime\": \"2016-04-19T20:29:56.6527687+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '8e8a73ab-4dba-4de5-a301-2db2bee31a3c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '2074dae9-73dd-4052-b17c-1c54dc4010e6',
  'x-ms-routing-request-id': 'WESTUS:20160419T203059Z:2074dae9-73dd-4052-b17c-1c54dc4010e6',
  date: 'Tue, 19 Apr 2016 20:30:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"4103e5f7-cf52-4b85-baac-710bbf41a46b\",\r\n  \"startTime\": \"2016-04-19T20:29:56.6527687+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '8e8a73ab-4dba-4de5-a301-2db2bee31a3c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '2074dae9-73dd-4052-b17c-1c54dc4010e6',
  'x-ms-routing-request-id': 'WESTUS:20160419T203059Z:2074dae9-73dd-4052-b17c-1c54dc4010e6',
  date: 'Tue, 19 Apr 2016 20:30:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"4103e5f7-cf52-4b85-baac-710bbf41a46b\",\r\n  \"startTime\": \"2016-04-19T20:29:56.6527687+00:00\",\r\n  \"endTime\": \"2016-04-19T20:31:15.4496514+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'c1b9d802-4b5a-46f8-9550-4af9a9ab0485',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '5fefd6ae-7a31-40a8-bf3c-0135d16e27b8',
  'x-ms-routing-request-id': 'WESTUS:20160419T203130Z:5fefd6ae-7a31-40a8-bf3c-0135d16e27b8',
  date: 'Tue, 19 Apr 2016 20:31:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/4103e5f7-cf52-4b85-baac-710bbf41a46b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"4103e5f7-cf52-4b85-baac-710bbf41a46b\",\r\n  \"startTime\": \"2016-04-19T20:29:56.6527687+00:00\",\r\n  \"endTime\": \"2016-04-19T20:31:15.4496514+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'c1b9d802-4b5a-46f8-9550-4af9a9ab0485',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '5fefd6ae-7a31-40a8-bf3c-0135d16e27b8',
  'x-ms-routing-request-id': 'WESTUS:20160419T203130Z:5fefd6ae-7a31-40a8-bf3c-0135d16e27b8',
  date: 'Tue, 19 Apr 2016 20:31:30 GMT',
  connection: 'close' });
 return result; }]];