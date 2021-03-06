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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestZVMCreate6381?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestZVMCreate6381' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5a8229d4-7bbe-4c84-8b7f-ca06e58b4e2e',
  'x-ms-correlation-request-id': '5a8229d4-7bbe-4c84-8b7f-ca06e58b4e2e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065607Z:5a8229d4-7bbe-4c84-8b7f-ca06e58b4e2e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:06 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestZVMCreate6381?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestZVMCreate6381' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '5a8229d4-7bbe-4c84-8b7f-ca06e58b4e2e',
  'x-ms-correlation-request-id': '5a8229d4-7bbe-4c84-8b7f-ca06e58b4e2e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065607Z:5a8229d4-7bbe-4c84-8b7f-ca06e58b4e2e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:06 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestZVMCreate6381?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate6381\",\"name\":\"xplatTestZVMCreate6381\",\"location\":\"eastus2\",\"tags\":{\"arm-cli-vm-premium-create-tests\":\"2016-03-29T06:56:07.307Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '2348bfde-775a-46f1-935b-3d252aac0724',
  'x-ms-correlation-request-id': '2348bfde-775a-46f1-935b-3d252aac0724',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065609Z:2348bfde-775a-46f1-935b-3d252aac0724',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xplatTestZVMCreate6381?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate6381\",\"name\":\"xplatTestZVMCreate6381\",\"location\":\"eastus2\",\"tags\":{\"arm-cli-vm-premium-create-tests\":\"2016-03-29T06:56:07.307Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '2348bfde-775a-46f1-935b-3d252aac0724',
  'x-ms-correlation-request-id': '2348bfde-775a-46f1-935b-3d252aac0724',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065609Z:2348bfde-775a-46f1-935b-3d252aac0724',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate6381/providers/Microsoft.Storage/storageAccounts/xplatteststorage17059?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Storage/operations/6706da6a-dc62-4595-a647-b539ef111c96?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'c923843a-1ac7-4f42-a506-03745aff58fd',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'c923843a-1ac7-4f42-a506-03745aff58fd',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065612Z:c923843a-1ac7-4f42-a506-03745aff58fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestZVMCreate6381/providers/Microsoft.Storage/storageAccounts/xplatteststorage17059?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Storage/operations/6706da6a-dc62-4595-a647-b539ef111c96?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'c923843a-1ac7-4f42-a506-03745aff58fd',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'c923843a-1ac7-4f42-a506-03745aff58fd',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065612Z:c923843a-1ac7-4f42-a506-03745aff58fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Storage/operations/6706da6a-dc62-4595-a647-b539ef111c96?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"eastus2\",\"properties\":{\"accountType\":\"Premium_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1c83d003-ab3f-4a90-9386-0801c5eb8553',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1c83d003-ab3f-4a90-9386-0801c5eb8553',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065642Z:1c83d003-ab3f-4a90-9386-0801c5eb8553',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Storage/operations/6706da6a-dc62-4595-a647-b539ef111c96?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"eastus2\",\"properties\":{\"accountType\":\"Premium_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1c83d003-ab3f-4a90-9386-0801c5eb8553',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1c83d003-ab3f-4a90-9386-0801c5eb8553',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160329T065642Z:1c83d003-ab3f-4a90-9386-0801c5eb8553',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Mar 2016 06:56:42 GMT',
  connection: 'close' });
 return result; }]];