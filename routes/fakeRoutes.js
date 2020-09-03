const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

function fakeRoutes(router) {
  /* Return a list of community ID's and names using this
  query string on the REST API:
  /services/data/v49.0/query/?q=SELECT+Id,+name+from+Network */
  router.get(
    '/api/v1/communities',
    requireLogin,
    (req, res) => {
      res.send(
        {
          "communities": [
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": false,
                  "description": "This is B2B community for the B2B Commerce Lightning experience that is accessible by Lauren Bailey.",
                  "guestMemberVisibilityEnabled": false,
                  "id": "0DB2w000000wr9OGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": false,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/B2BLightning/s/login",
                  "memberVisibilityEnabled": false,
                  "name": "B2B Commerce Lightning Experience",
                  "nicknameDisplayEnabled": true,
                  "privateMessagesEnabled": false,
                  "reputationEnabled": false,
                  "sendWelcomeEmail": true,
                  "siteAsContainerEnabled": true,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/B2BLightning",
                  "status": "Live",
                  "templateName": "B2B Commerce",
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9OGAQ",
                  "urlPathPrefix": "B2BLightning"
              },
              {
                  "allowChatterAccessWithoutLogin": true,
                  "allowMembersToFlag": true,
                  "description": "This is a B2C community using the Customer Service (Napili) template and accessible by Larry Baxter.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9JGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": true,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/consumer/s/login",
                  "memberVisibilityEnabled": true,
                  "name": "Consumer Community",
                  "nicknameDisplayEnabled": true,
                  "privateMessagesEnabled": true,
                  "reputationEnabled": true,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": true,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/consumer",
                  "status": "Live",
                  "templateName": "Customer Service",
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9JGAQ",
                  "urlPathPrefix": "consumer"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": true,
                  "description": "Partner Community for PRM, channel sales &amp; marketing.  Used by Paul Partner and Vance Channel.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9IGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": true,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/partnercentral/login",
                  "memberVisibilityEnabled": true,
                  "name": "Partner Central",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": true,
                  "reputationEnabled": true,
                  "sendWelcomeEmail": true,
                  "siteAsContainerEnabled": true,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/partnercentral",
                  "status": "Live",
                  "templateName": "Partner Central",
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9IGAQ",
                  "urlPathPrefix": "partnercentral"
              },
              {
                  "allowChatterAccessWithoutLogin": true,
                  "allowMembersToFlag": true,
                  "description": "This is a B2B community using the Customer Service (Napili) template and accessible by Lauren Bailey.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9LGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": true,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/professional/s/login",
                  "memberVisibilityEnabled": true,
                  "name": "Professional Community",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": false,
                  "reputationEnabled": true,
                  "sendWelcomeEmail": true,
                  "siteAsContainerEnabled": true,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/professional",
                  "status": "Live",
                  "templateName": "Customer Service",
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9LGAQ",
                  "urlPathPrefix": "professional"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": true,
                  "description": "This is the legacy Customer Community.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9PGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": true,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/customers/login",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Customer",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": true,
                  "reputationEnabled": true,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": false,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/customers",
                  "status": "Inactive",
                  "templateName": null,
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9PGAQ",
                  "urlPathPrefix": "customers"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": true,
                  "description": "This site is no longer used.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9QGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": true,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/social/login",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Legacy 1",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": true,
                  "reputationEnabled": false,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": false,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/social",
                  "status": "Inactive",
                  "templateName": null,
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9QGAQ",
                  "urlPathPrefix": "social"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": false,
                  "description": "This site is no longer used.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9RGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": false,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/delete/login",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Legacy 2",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": false,
                  "reputationEnabled": false,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": false,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/delete",
                  "status": "Inactive",
                  "templateName": null,
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9RGAQ",
                  "urlPathPrefix": "delete"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": false,
                  "description": "This site is no longer used.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9SGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": false,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/consumersdep/login",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Legacy 3",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": false,
                  "reputationEnabled": false,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": false,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/consumersdep",
                  "status": "Inactive",
                  "templateName": null,
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9SGAQ",
                  "urlPathPrefix": "consumersdep"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": false,
                  "description": "This site is no longer used.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9TGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": false,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/mss/login",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Legacy 5",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": false,
                  "reputationEnabled": false,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": false,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/mss",
                  "status": "Inactive",
                  "templateName": null,
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9TGAQ",
                  "urlPathPrefix": "mss"
              },
              {
                  "allowChatterAccessWithoutLogin": true,
                  "allowMembersToFlag": false,
                  "description": "Community for B2B Commerce Storefront which can be accessible by B2B user Lauren Bailey.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9KGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": false,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/DefaultStore/ccrz__CCSiteLogin",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Legacy B2B Commerce Storefront",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": false,
                  "reputationEnabled": false,
                  "sendWelcomeEmail": true,
                  "siteAsContainerEnabled": false,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/DefaultStore",
                  "status": "Inactive",
                  "templateName": null,
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9KGAQ",
                  "urlPathPrefix": "DefaultStore"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": false,
                  "description": "This is a legacy Employee Community.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9NGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": false,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/employeeconcierge/s/login",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Legacy Employee Community",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": false,
                  "reputationEnabled": false,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": true,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/employeeconcierge",
                  "status": "Inactive",
                  "templateName": "Customer Service",
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9NGAQ",
                  "urlPathPrefix": "employeeconcierge"
              },
              {
                  "allowChatterAccessWithoutLogin": false,
                  "allowMembersToFlag": true,
                  "description": "This is the legacy Partner Community.",
                  "guestMemberVisibilityEnabled": true,
                  "id": "0DB2w000000wr9MGAQ",
                  "invitationsEnabled": false,
                  "knowledgeableEnabled": true,
                  "loginUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/partners/login",
                  "memberVisibilityEnabled": true,
                  "name": "Ω - Partner",
                  "nicknameDisplayEnabled": false,
                  "privateMessagesEnabled": true,
                  "reputationEnabled": true,
                  "sendWelcomeEmail": false,
                  "siteAsContainerEnabled": false,
                  "siteUrl": "https://sdodemo-main-166ce2cf6b6-172-17414693245.force.com/partners",
                  "status": "Inactive",
                  "templateName": null,
                  "url": "/services/data/v49.0/connect/communities/0DB2w000000wr9MGAQ",
                  "urlPathPrefix": "partners"
              }
          ],
          "total": 12
      }
      )
    }
  );

  /* Return a list of content types for a given network */
  router.get(
    '/api/v1/content_types', 
    requireLogin,
    (req, res) => {
    res.send({
      physc: 'List of content types for a network id'
    })
  });

  /* Return a specific list of content for a given content type id */
  router.get(
    '/api/v1/content', 
    requireLogin,
    (req, res) => {
    res.send({
      physc: 'List of content for a content type'
    })
  });
}

module.exports = {
  fakeRoutes
};