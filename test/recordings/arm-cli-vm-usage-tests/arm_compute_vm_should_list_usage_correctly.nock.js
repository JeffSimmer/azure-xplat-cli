// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/usages?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 2000,\r\n      \"name\": {\r\n        \"value\": \"availabilitySets\",\r\n        \"localizedValue\": \"Availability Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 2,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"cores\",\r\n        \"localizedValue\": \"Total Regional Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 2,\r\n      \"limit\": 10000,\r\n      \"name\": {\r\n        \"value\": \"virtualMachines\",\r\n        \"localizedValue\": \"Virtual Machines\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 0,\r\n      \"limit\": 50,\r\n      \"name\": {\r\n        \"value\": \"virtualMachineScaleSets\",\r\n        \"localizedValue\": \"Virtual Machine Scale Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardDFamily\",\r\n        \"localizedValue\": \"Standard D Family Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardA0_A7Family\",\r\n        \"localizedValue\": \"Standard A0-A7 Family Cores\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1230',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131026996520851436',
  'x-ms-request-id': '90259c37-29a2-42a5-9909-039c1c0a9193',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '390183f8-a402-4513-9db0-0444b8def9b0',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T032217Z:390183f8-a402-4513-9db0-0444b8def9b0',
  date: 'Tue, 29 Mar 2016 03:22:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/usages?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 2000,\r\n      \"name\": {\r\n        \"value\": \"availabilitySets\",\r\n        \"localizedValue\": \"Availability Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 2,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"cores\",\r\n        \"localizedValue\": \"Total Regional Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 2,\r\n      \"limit\": 10000,\r\n      \"name\": {\r\n        \"value\": \"virtualMachines\",\r\n        \"localizedValue\": \"Virtual Machines\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 0,\r\n      \"limit\": 50,\r\n      \"name\": {\r\n        \"value\": \"virtualMachineScaleSets\",\r\n        \"localizedValue\": \"Virtual Machine Scale Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardDFamily\",\r\n        \"localizedValue\": \"Standard D Family Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardA0_A7Family\",\r\n        \"localizedValue\": \"Standard A0-A7 Family Cores\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1230',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131026996520851436',
  'x-ms-request-id': '90259c37-29a2-42a5-9909-039c1c0a9193',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '390183f8-a402-4513-9db0-0444b8def9b0',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T032217Z:390183f8-a402-4513-9db0-0444b8def9b0',
  date: 'Tue, 29 Mar 2016 03:22:16 GMT',
  connection: 'close' });
 return result; }]];