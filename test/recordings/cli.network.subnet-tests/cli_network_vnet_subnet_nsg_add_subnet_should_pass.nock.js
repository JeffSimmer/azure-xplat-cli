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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '84625c4b01509606815a32f706dbbc94',
  date: 'Mon, 25 Apr 2016 08:46:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '84625c4b01509606815a32f706dbbc94',
  date: 'Mon, 25 Apr 2016 08:46:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/84625c4b01509606815a32f706dbbc94')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>84625c4b-0150-9606-815a-32f706dbbc94</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '02cc56c2634aacd5838c9b1e64b22892',
  date: 'Mon, 25 Apr 2016 08:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/84625c4b01509606815a32f706dbbc94')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>84625c4b-0150-9606-815a-32f706dbbc94</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '02cc56c2634aacd5838c9b1e64b22892',
  date: 'Mon, 25 Apr 2016 08:47:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/CliTestNsg1870?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>CliTestNsg1870</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2510',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '506d44b0fb89af21beeb8689415d8129',
  date: 'Mon, 25 Apr 2016 08:47:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/CliTestNsg1870?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>CliTestNsg1870</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2510',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '506d44b0fb89af21beeb8689415d8129',
  date: 'Mon, 25 Apr 2016 08:47:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/CliTestNsg1870?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>CliTestNsg1870</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2510',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3159513bcb30a717af737b769df179d9',
  date: 'Mon, 25 Apr 2016 08:47:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/networksecuritygroups/CliTestNsg1870?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>CliTestNsg1870</Name><Location>West US</Location><State>Created</State><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2510',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3159513bcb30a717af737b769df179d9',
  date: 'Mon, 25 Apr 2016 08:47:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns>\r\n      <DnsServers>\r\n        <DnsServer name=\"dns-cli-1\" IPAddress=\"66.77.88.98\" />\r\n      </DnsServers>\r\n    </Dns>\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"LocalNet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"tryaVnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.1.0/11</AddressPrefix>\r\n        </AddressSpace>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"classic-cli-vnet2\" Location=\"South Central US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>192.168.2.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"backend\">\r\n            <AddressPrefix>192.168.2.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett4852\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett3359\">\r\n            <AddressPrefix>10.0.4.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"MyNetwork\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.32.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testnetwork1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"tryaVnet\" Location=\"East US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"VnetForGateway\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.1.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.1.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <Gateway>\r\n          <ConnectionsToLocalNetwork>\r\n            <LocalNetworkSiteRef name=\"LocalNet\">\r\n              <Connection type=\"IPsec\" />\r\n            </LocalNetworkSiteRef>\r\n          </ConnectionsToLocalNetwork>\r\n        </Gateway>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '4295',
  'content-type': 'text/plain',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6ef9fd0782efabb59d12dfc37a6c2e8d',
  date: 'Mon, 25 Apr 2016 08:47:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns>\r\n      <DnsServers>\r\n        <DnsServer name=\"dns-cli-1\" IPAddress=\"66.77.88.98\" />\r\n      </DnsServers>\r\n    </Dns>\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"LocalNet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"tryaVnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.1.0/11</AddressPrefix>\r\n        </AddressSpace>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"classic-cli-vnet2\" Location=\"South Central US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>192.168.2.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"backend\">\r\n            <AddressPrefix>192.168.2.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"CliTestVnett4852\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett3359\">\r\n            <AddressPrefix>10.0.4.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"MyNetwork\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.32.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"NetForGateway2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testnetwork1\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"tryaVnet\" Location=\"East US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"VnetForGateway\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.1.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.1.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n        <Gateway>\r\n          <ConnectionsToLocalNetwork>\r\n            <LocalNetworkSiteRef name=\"LocalNet\">\r\n              <Connection type=\"IPsec\" />\r\n            </LocalNetworkSiteRef>\r\n          </ConnectionsToLocalNetwork>\r\n        </Gateway>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '4295',
  'content-type': 'text/plain',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6ef9fd0782efabb59d12dfc37a6c2e8d',
  date: 'Mon, 25 Apr 2016 08:47:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/virtualnetwork/CliTestVnett4852/subnets/CliTestSubnett3359/networksecuritygroups', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'de2add853aceab09bec1524c6c752a53',
  date: 'Mon, 25 Apr 2016 08:47:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/virtualnetwork/CliTestVnett4852/subnets/CliTestSubnett3359/networksecuritygroups', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'de2add853aceab09bec1524c6c752a53',
  date: 'Mon, 25 Apr 2016 08:47:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/de2add853aceab09bec1524c6c752a53')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>de2add85-3ace-ab09-bec1-524c6c752a53</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1cc9d63d1b469b9299aee4afb763078b',
  date: 'Mon, 25 Apr 2016 08:47:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/de2add853aceab09bec1524c6c752a53')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>de2add85-3ace-ab09-bec1-524c6c752a53</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1cc9d63d1b469b9299aee4afb763078b',
  date: 'Mon, 25 Apr 2016 08:47:47 GMT',
  connection: 'close' });
 return result; }]];