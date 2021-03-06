// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-23a4-e65f717fd101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":10000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-23a4-e65f717fd101',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '712c1f7c-2a11-41c9-bb7c-be4a1c448f41',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'ece3210a-6bff-43b7-9d37-5c0c89123e5c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104906Z:ece3210a-6bff-43b7-9d37-5c0c89123e5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-23a4-e65f717fd101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":10000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-23a4-e65f717fd101',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '712c1f7c-2a11-41c9-bb7c-be4a1c448f41',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'ece3210a-6bff-43b7-9d37-5c0c89123e5c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104906Z:ece3210a-6bff-43b7-9d37-5c0c89123e5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/MX/set-mx?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"d0b72015-cfc4-4569-8d2c-ce33e5f81781\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '405',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd0b72015-cfc4-4569-8d2c-ce33e5f81781',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'fdde800a-7284-4eff-bcc5-807dae5b0e43',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '86830e44-5fbc-4fab-a7a6-bf183fc85f18',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104906Z:86830e44-5fbc-4fab-a7a6-bf183fc85f18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/MX/set-mx?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"d0b72015-cfc4-4569-8d2c-ce33e5f81781\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '405',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd0b72015-cfc4-4569-8d2c-ce33e5f81781',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'fdde800a-7284-4eff-bcc5-807dae5b0e43',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '86830e44-5fbc-4fab-a7a6-bf183fc85f18',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104906Z:86830e44-5fbc-4fab-a7a6-bf183fc85f18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/MX/set-mx?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"1b2e90a2-2353-46da-a96b-ec1e350cb100\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.test.com\",\"preference\":100}]}}", { 'cache-control': 'private',
  'content-length': '450',
  'content-type': 'application/json; charset=utf-8',
  etag: '1b2e90a2-2353-46da-a96b-ec1e350cb100',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '94534e3a-0b7a-4aa4-a1a5-392a2fd112d6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '74c903e7-eace-4816-a6d8-30b7993cd9d2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104907Z:74c903e7-eace-4816-a6d8-30b7993cd9d2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/MX/set-mx?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"1b2e90a2-2353-46da-a96b-ec1e350cb100\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.test.com\",\"preference\":100}]}}", { 'cache-control': 'private',
  'content-length': '450',
  'content-type': 'application/json; charset=utf-8',
  etag: '1b2e90a2-2353-46da-a96b-ec1e350cb100',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '94534e3a-0b7a-4aa4-a1a5-392a2fd112d6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '74c903e7-eace-4816-a6d8-30b7993cd9d2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104907Z:74c903e7-eace-4816-a6d8-30b7993cd9d2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:07 GMT',
  connection: 'close' });
 return result; }]];