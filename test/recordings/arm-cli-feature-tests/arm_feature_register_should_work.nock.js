// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc/register?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"Registered\"},\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Automation/dsc\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '250',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'centralus:ed6296c0-e929-406f-af86-a669e5d28aa3',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9dee0db2-6c03-47a8-8b42-4840f9d536c8',
  'x-ms-routing-request-id': 'CENTRALUS:20160128T210428Z:9dee0db2-6c03-47a8-8b42-4840f9d536c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Jan 2016 21:04:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc/register?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"Registered\"},\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Automation/dsc\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '250',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'centralus:ed6296c0-e929-406f-af86-a669e5d28aa3',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9dee0db2-6c03-47a8-8b42-4840f9d536c8',
  'x-ms-routing-request-id': 'CENTRALUS:20160128T210428Z:9dee0db2-6c03-47a8-8b42-4840f9d536c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Jan 2016 21:04:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"Registered\"},\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Automation/dsc\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '250',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'centralus:f329e6d4-1d09-48e2-866b-e8c182f00ffd',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2d339a7b-f05d-4982-9e39-8b3f2fb733b8',
  'x-ms-routing-request-id': 'CENTRALUS:20160128T210428Z:2d339a7b-f05d-4982-9e39-8b3f2fb733b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Jan 2016 21:04:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"Registered\"},\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Automation/dsc\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '250',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'centralus:f329e6d4-1d09-48e2-866b-e8c182f00ffd',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2d339a7b-f05d-4982-9e39-8b3f2fb733b8',
  'x-ms-routing-request-id': 'CENTRALUS:20160128T210428Z:2d339a7b-f05d-4982-9e39-8b3f2fb733b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Jan 2016 21:04:28 GMT',
  connection: 'close' });
 return result; }]];