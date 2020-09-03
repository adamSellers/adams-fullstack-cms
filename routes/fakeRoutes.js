const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

function fakeRoutes(router) {
  /* Return a list of community ID's and names using the 
  content delivery API:
  {{_endpoint}}/services/data/v{{version}}/connect/communities */
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

  /* Return a list of content for a given community id, filter out
  by content type from the dropdown. Grabbed from the content
  deliver API: 
  /services/data/v{{version}}/connect/communities/0DB2w000000wr9JGAQ/managed-content/delivery */
  router.get(
    '/api/v1/getContent', 
    requireLogin,
    (req, res) => {
    res.send(
      {
        "currentPageUrl": "/services/data/v49.0/connect/communities/0DB2w000000wr9JGAQ/managed-content/delivery?page=0&pageSize=25",
        "items": [
            {
                "contentNodes": {
                    "image": {
                        "altText": "Get updates on our COVID-19 actions.",
                        "fileName": null,
                        "mediaType": "Image",
                        "mimeType": null,
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": "https://images.unsplash.com/photo-1588457898090-cabf646c48b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                        "title": "Banner: COVID-19 Updates",
                        "unauthenticatedUrl": null,
                        "url": "https://images.unsplash.com/photo-1588457898090-cabf646c48b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    },
                    "flag": {
                        "nodeType": "Text",
                        "value": "IMPORTANT!"
                    },
                    "Title": {
                        "nodeType": "NameField",
                        "value": "COVID-19 Updates"
                    },
                    "ctaLink": {
                        "nodeType": "Url",
                        "value": "https://www.salesforce.com/company/news-press/stories/2020/4/salesforce-covid-resources/"
                    },
                    "teaser": {
                        "nodeType": "MultilineText",
                        "value": "COVID-19 has affected every business in every industry. We&#39;re working diligently to protect our customers, and to keep the high standards you&#39;re accustomed to. Learn more about the actions we&#39;re taking and what to expect as we navigate this health crisis together."
                    }
                },
                "contentUrlName": "coid-19-updates",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3CKEA0",
                "publishedDate": "2020-08-11T16:24:31.000Z",
                "title": "COVID-19 Updates",
                "type": "Banner_Ad",
                "typeLabel": "Banner Ad"
            },
            {
                "contentNodes": {
                    "image": {
                        "altText": null,
                        "fileName": "gold-Medal.png",
                        "mediaType": "Image",
                        "mimeType": "image/png",
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": null,
                        "title": "Partner Central: Partner Gold Medal Icon",
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/uhkwkds9piWkz8dd6PZDDQ0DlO8OuzCWgehLaoyzBIQ="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Gold Partner Program"
                    },
                    "body": {
                        "nodeType": "RichText",
                        "value": "&lt;p&gt;Product Detail&lt;/p&gt; \n&lt;p&gt;- Discount on All Products: 15%&lt;/p&gt; \n&lt;p&gt;- Marketing Coop Contribution: 30%&lt;/p&gt; \n&lt;p&gt;- Market Develop Funds: $20k annually&lt;/p&gt;"
                    }
                },
                "contentUrlName": "gold-partner-program",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3CJEA0",
                "publishedDate": "2020-08-03T23:29:36.000Z",
                "title": "Gold Partner Program",
                "type": "flexContent",
                "typeLabel": "Flex!"
            },
            {
                "contentNodes": {
                    "image": {
                        "altText": null,
                        "fileName": "silver-medal.png",
                        "mediaType": "Image",
                        "mimeType": "image/png",
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": null,
                        "title": "Partner Central: Silver Medal Icon",
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/yl2FqUJQWP28ejS3MUCCg5Rewp5jETH1L78eDKorMlU="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Silver Partner Program"
                    },
                    "body": {
                        "nodeType": "RichText",
                        "value": "&lt;p&gt;Product Detail&lt;/p&gt; \n&lt;p&gt;- Discount on Product Line: &lt;b&gt;10%&lt;/b&gt;&lt;/p&gt; \n&lt;p&gt;- Marketing Coop Contribution: &lt;b&gt;20%&lt;/b&gt;&lt;/p&gt;"
                    }
                },
                "contentUrlName": "silver-partner-program",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3CIEA0",
                "publishedDate": "2020-08-03T23:24:14.000Z",
                "title": "Silver Partner Program",
                "type": "flexContent",
                "typeLabel": "Flex!"
            },
            {
                "contentNodes": {
                    "source": {
                        "fileName": "silver-medal.png",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/png",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67uL",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/yl2FqUJQWP28ejS3MUCCg5Rewp5jETH1L78eDKorMlU="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Partner Central: Silver Medal Icon"
                    }
                },
                "contentUrlName": "partner-central-silver-medal-icon",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3G3EAK",
                "publishedDate": "2020-08-03T23:20:29.000Z",
                "title": "Partner Central: Silver Medal Icon",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "source": {
                        "fileName": "gold-Medal.png",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/png",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67uK",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/uhkwkds9piWkz8dd6PZDDQ0DlO8OuzCWgehLaoyzBIQ="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Partner Central: Partner Gold Medal Icon"
                    }
                },
                "contentUrlName": "partner-central-partner-gold-medal-icon",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3G2EAK",
                "publishedDate": "2020-08-03T23:19:36.000Z",
                "title": "Partner Central: Partner Gold Medal Icon",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "image": {
                        "altText": "Offshore wind turbine.",
                        "fileName": "X6offshorewindfarm.jpg",
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": null,
                        "title": "Thumbnail: How Wind Turbines Work",
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/bHbeu2fyKzRLAz4VFKzBWxbhBtDfV9GIlpPYX8btYKs="
                    },
                    "metadata2": {
                        "nodeType": "MultilineText",
                        "value": "Go to the Video!"
                    },
                    "flag": {
                        "nodeType": "MultilineText",
                        "value": "Guest Video"
                    },
                    "videoURL": {
                        "nodeType": "MultilineText",
                        "value": "https://www.youtube.com/watch?v=qSWm_nprfqE"
                    },
                    "eyebrow": {
                        "nodeType": "MultilineText",
                        "value": "Wind Power"
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "How Wind Turbines Work"
                    },
                    "excerpt": {
                        "nodeType": "MultilineText",
                        "value": "Learn the basics of how wind turbines work."
                    },
                    "body": {
                        "nodeType": "RichText",
                        "value": "&lt;p&gt;Wind turbines don&amp;#39;t have to be a mystery! This video offers a great explanation. But don&amp;#39;t settle for just a video, &lt;a href=&quot;http://www.salesforce.com&quot; target=&quot;_blank&quot;&gt;click here&lt;/a&gt; to register for our seminar!&lt;/p&gt;"
                    }
                },
                "contentUrlName": "how-wind-turbines-work",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3C0EAK",
                "publishedDate": "2020-07-30T17:23:53.000Z",
                "title": "How Wind Turbines Work",
                "type": "externalVideo",
                "typeLabel": "Video (External)"
            },
            {
                "contentNodes": {
                    "bannerImage": {
                        "altText": "Houses with solar panels.",
                        "fileName": "optimized138310614.jpg",
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": null,
                        "title": "Thumbnail: Wind Energy Trade Show Coming Soon",
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/UOER3_8JRVdRe6HnmlfJxLyRVYnKD6cDjMpasYeoVYE="
                    },
                    "excerpt": {
                        "nodeType": "MultilineText",
                        "value": "September 14 to 17 | Anaheim Convention Center, Anaheim, CA"
                    },
                    "body": {
                        "nodeType": "RichText",
                        "value": "&lt;p&gt;Given the enormous potential that the renewable energy industry has in the United States of America, it makes enormous good sense for companies in the said vertical to participate in renewable energy trade shows and conferences to expand their outreach, explore opportunities for new business development and trade show exhibit solutions to some of the most pressing challenges of clean energy.&lt;/p&gt;"
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Wind Energy Trade Show Coming Soon"
                    }
                },
                "contentUrlName": "wind-energy-trade-show-coming-soon",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3BeEAK",
                "publishedDate": "2020-07-30T17:23:35.000Z",
                "title": "Wind Energy Trade Show Coming Soon",
                "type": "news",
                "typeLabel": "News"
            },
            {
                "contentNodes": {
                    "image": {
                        "altText": null,
                        "fileName": "bladeless.turbinex519.jpg",
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": null,
                        "title": "Thumbnail: Bladeless Wind Turbines Hint at the Future",
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/IO1C__L0UMNZRAjJoCmBSoEsp4HujUnInpeDi._NAIM="
                    },
                    "metadata2": {
                        "nodeType": "MultilineText",
                        "value": "Watch"
                    },
                    "flag": {
                        "nodeType": "MultilineText",
                        "value": "New"
                    },
                    "videoURL": {
                        "nodeType": "MultilineText",
                        "value": "https://www.youtube.com/watch?v=eW4AzDpjcsI"
                    },
                    "eyebrow": {
                        "nodeType": "MultilineText",
                        "value": "Wind Power"
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Bladeless Wind Turbines Hint at the Future"
                    },
                    "excerpt": {
                        "nodeType": "MultilineText",
                        "value": "Learn more about our investments in a bladeless future, with smaller turbine footprints, less noise, and more efficiency!"
                    }
                },
                "contentUrlName": "bladeless-wind-turbines-hint-at-the-future",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3CGEA0",
                "publishedDate": "2020-07-30T17:23:05.000Z",
                "title": "Bladeless Wind Turbines Hint at the Future",
                "type": "externalVideo",
                "typeLabel": "Video (External)"
            },
            {
                "contentNodes": {
                    "image": {
                        "altText": "House with solar panels.",
                        "fileName": "X5batteryfactory.jpg",
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": null,
                        "title": "Thumbnail: Top 7 Mistakes for New Solar Customers",
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/UOSTHkCxR_I3aW_iw.kAqUXaX0ZchMSAJhgdiORW3Lg="
                    },
                    "metadata2": {
                        "nodeType": "MultilineText",
                        "value": "Watch!"
                    },
                    "flag": {
                        "nodeType": "MultilineText",
                        "value": "Customer Video!"
                    },
                    "videoURL": {
                        "nodeType": "MultilineText",
                        "value": "https://www.youtube.com/watch?v=wHOulpxI4Us"
                    },
                    "eyebrow": {
                        "nodeType": "MultilineText",
                        "value": "Solar Power"
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Top 7 Mistakes for New Solar Customers"
                    },
                    "excerpt": {
                        "nodeType": "MultilineText",
                        "value": "People make these 7 mistakes over and over again when they decide to buy their first solar panel system."
                    },
                    "body": {
                        "nodeType": "RichText",
                        "value": "&lt;p&gt;Learn the top mistakes to avoid when starting with solar power.&lt;/p&gt;"
                    }
                },
                "contentUrlName": "top-7-mistakes-for-new-solar-customers",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3CHEA0",
                "publishedDate": "2020-07-30T17:22:20.000Z",
                "title": "Top 7 Mistakes for New Solar Customers",
                "type": "externalVideo",
                "typeLabel": "Video (External)"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Drones flying over wind turbines."
                    },
                    "source": {
                        "fileName": "X9inspectiondrones.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tL",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/VT7CgYRNrHff7lmvPTuO2eXnLE2HhofO7D_FhjBQlQA="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Inspection Drones"
                    }
                },
                "contentUrlName": "4b013ce4",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F3EAK",
                "publishedDate": "2020-07-30T17:21:56.000Z",
                "title": "Thumbnail: Inspection Drones",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "source": {
                        "fileName": "X8windturbinefarm.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tM",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/G0CBff6UMaJNbJZ1Mayxwv7XU5UobsLqBIk74UOt2K0="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Wind Turbine Farm"
                    }
                },
                "contentUrlName": "914199a4",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F4EAK",
                "publishedDate": "2020-07-30T17:21:25.000Z",
                "title": "Thumbnail: Wind Turbine Farm",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Wind turbines in a field."
                    },
                    "source": {
                        "fileName": "X2RenewableProducers.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tP",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/.H34BnY0RT52bAmRxvfCoA9zMb.0yYnkjYjchAYvImk="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Renewable energy capacity"
                    }
                },
                "contentUrlName": "6da40cb0",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F7EAK",
                "publishedDate": "2020-07-30T17:20:50.000Z",
                "title": "Thumbnail: Renewable energy capacity",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "House with solar panels."
                    },
                    "source": {
                        "fileName": "X5batteryfactory.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tQ",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/UOSTHkCxR_I3aW_iw.kAqUXaX0ZchMSAJhgdiORW3Lg="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Top 7 Mistakes for New Solar Customers"
                    }
                },
                "contentUrlName": "fcf7ad4e",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F8EAK",
                "publishedDate": "2020-07-30T17:19:58.000Z",
                "title": "Thumbnail: Top 7 Mistakes for New Solar Customers",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Wind turbines on water."
                    },
                    "source": {
                        "fileName": "windturbineswater.png",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/png",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tN",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/MOvIWY0sbQ5W.XxWkrBQRkoDczWAkpedJWSoUPuNzyY="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Wind Turbines get an Upgrade"
                    }
                },
                "contentUrlName": "a3dc3f11",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F5EAK",
                "publishedDate": "2020-07-30T17:19:12.000Z",
                "title": "Thumbnail: Wind Turbines get an Upgrade",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "source": {
                        "fileName": "X3communitysolar.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tR",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/sPq.bD7RwIYT5769wC2mXvv459OcpVlfp2EhddzX8ho="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: An Intro to Solar Panels"
                    }
                },
                "contentUrlName": "cba25011",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F9EAK",
                "publishedDate": "2020-07-30T17:18:37.000Z",
                "title": "Thumbnail: An Intro to Solar Panels",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Wind turbines being produced."
                    },
                    "source": {
                        "fileName": "X7indiawindturbines.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tJ",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/5pXSmoEm0XHWkfcy9IoNBttLxOcppJTg.g23.O4SbNo="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Foreign Firms Look to Make India Global Wind Turbine Export Hub"
                    }
                },
                "contentUrlName": "12765478",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F1EAK",
                "publishedDate": "2020-07-30T17:16:56.000Z",
                "title": "Thumbnail: Foreign Firms Look to Make India Global Wind Turbine Export Hub",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Houses with renewable energy."
                    },
                    "source": {
                        "fileName": "X4housewithnobills.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tS",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/4tJPYqB3guTvqigp.CMckS_h34bCiuXD1Iu3FWu6IJU="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: House with No Energy Bills"
                    }
                },
                "contentUrlName": "dc930c85",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3FAEA0",
                "publishedDate": "2020-07-30T17:15:57.000Z",
                "title": "Thumbnail: House with No Energy Bills",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Oil refineries and legacy fossil fuel production."
                    },
                    "source": {
                        "fileName": "X1SolarPanelTariff.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tT",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/XrCDPUkgzQcnlKudWKgjaHClJIBlXcX6fLMHaJVDa6c="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: U.S. solar panel import tariff to hit European, Asian manufacturers"
                    }
                },
                "contentUrlName": "9533803",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3FBEA0",
                "publishedDate": "2020-07-30T17:15:14.000Z",
                "title": "Thumbnail: U.S. solar panel import tariff to hit European, Asian manufacturers",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "source": {
                        "fileName": "bladeless.turbinex519.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67uJ",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/IO1C__L0UMNZRAjJoCmBSoEsp4HujUnInpeDi._NAIM="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Bladeless Wind Turbines Hint at the Future"
                    }
                },
                "contentUrlName": "thumbnail-bladeless-wind-turbines-hint-at-the-future",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3G1EAK",
                "publishedDate": "2020-07-30T17:14:06.000Z",
                "title": "Thumbnail: Bladeless Wind Turbines Hint at the Future",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Bladeless wind turbines in the field."
                    },
                    "source": {
                        "fileName": "inline01windturbines.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tO",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/jv.bRSb5NQGpntbqYEbQ9b0VqUgKe98M.zvM.BUzuic="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: The Basics of Bladeless Wind Turbines"
                    }
                },
                "contentUrlName": "91752258",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F6EAK",
                "publishedDate": "2020-07-30T17:11:18.000Z",
                "title": "Thumbnail: The Basics of Bladeless Wind Turbines",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Houses with solar panels."
                    },
                    "source": {
                        "fileName": "optimized138310614.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tU",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/UOER3_8JRVdRe6HnmlfJxLyRVYnKD6cDjMpasYeoVYE="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: Wind Energy Trade Show Coming Soon"
                    }
                },
                "contentUrlName": "ee78e387",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3FCEA0",
                "publishedDate": "2020-07-30T17:10:10.000Z",
                "title": "Thumbnail: Wind Energy Trade Show Coming Soon",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Offshore wind turbine."
                    },
                    "source": {
                        "fileName": "X6offshorewindfarm.jpg",
                        "isExternal": false,
                        "mediaType": "Image",
                        "mimeType": "image/jpeg",
                        "nodeType": "MediaSource",
                        "referenceId": "05T2w00000B67tK",
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "/cms/delivery/media/bHbeu2fyKzRLAz4VFKzBWxbhBtDfV9GIlpPYX8btYKs="
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Thumbnail: How Wind Turbines Work"
                    }
                },
                "contentUrlName": "57a102d6",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3F2EAK",
                "publishedDate": "2020-07-30T17:09:07.000Z",
                "title": "Thumbnail: How Wind Turbines Work",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "image": {
                        "altText": "Join our virtual conference.",
                        "fileName": null,
                        "mediaType": "Image",
                        "mimeType": null,
                        "nodeType": "Media",
                        "resourceUrl": null,
                        "thumbnailUrl": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
                        "title": "Banner: Virtual Conference",
                        "unauthenticatedUrl": null,
                        "url": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                    },
                    "ctaText": {
                        "nodeType": "Text",
                        "value": "Learn More"
                    },
                    "Title": {
                        "nodeType": "NameField",
                        "value": "Join Our Virtual Conference!"
                    },
                    "ctaLink": {
                        "nodeType": "Url",
                        "value": "https://www.dreamforce.com"
                    },
                    "teaser": {
                        "nodeType": "MultilineText",
                        "value": "We&#39;re going VIRTUAL! While we may not be able to see you in person this year, we&#39;d love to see you at our newly-reimagined virtual conference! Learn more about how we&#39;re taking the expo experience virtual today!"
                    }
                },
                "contentUrlName": "join-our-virtual-conference",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3CFEA0",
                "publishedDate": "2020-07-09T19:51:28.000Z",
                "title": "Join Our Virtual Conference!",
                "type": "Banner_Ad",
                "typeLabel": "Banner Ad"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Join our virtual conference."
                    },
                    "source": {
                        "fileName": null,
                        "isExternal": true,
                        "mediaType": "Image",
                        "mimeType": null,
                        "nodeType": "MediaSource",
                        "referenceId": null,
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Banner: Virtual Conference"
                    },
                    "thumbUrl": {
                        "nodeType": "Url",
                        "value": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80"
                    }
                },
                "contentUrlName": "banner-virtual-conference",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3GSEA0",
                "publishedDate": "2020-07-09T19:50:20.000Z",
                "title": "Banner: Virtual Conference",
                "type": "cms_image",
                "typeLabel": "Image"
            },
            {
                "contentNodes": {
                    "altText": {
                        "nodeType": "MultilineText",
                        "value": "Get updates on our COVID-19 actions."
                    },
                    "source": {
                        "fileName": null,
                        "isExternal": true,
                        "mediaType": "Image",
                        "mimeType": null,
                        "nodeType": "MediaSource",
                        "referenceId": null,
                        "resourceUrl": null,
                        "unauthenticatedUrl": null,
                        "url": "https://images.unsplash.com/photo-1588457898090-cabf646c48b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    },
                    "title": {
                        "nodeType": "NameField",
                        "value": "Banner: COVID-19 Updates"
                    },
                    "thumbUrl": {
                        "nodeType": "Url",
                        "value": "https://images.unsplash.com/photo-1588457898090-cabf646c48b9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    }
                },
                "contentUrlName": "banner-covid-19-updates",
                "language": "en_US",
                "managedContentId": "20Y2w000000U3GTEA0",
                "publishedDate": "2020-07-09T19:35:53.000Z",
                "title": "Banner: COVID-19 Updates",
                "type": "cms_image",
                "typeLabel": "Image"
            }
        ],
        "managedContentTypes": {
            "news": {
                "label": "News",
                "name": "news",
                "nodeTypes": {
                    "title": {
                        "label": "Title",
                        "name": "title",
                        "nodeType": "NameField"
                    },
                    "body": {
                        "label": "Body",
                        "name": "body",
                        "nodeType": "RichText"
                    },
                    "bannerImage": {
                        "label": "Banner Image",
                        "name": "bannerImage",
                        "nodeType": "Media"
                    },
                    "excerpt": {
                        "label": "Excerpt",
                        "name": "excerpt",
                        "nodeType": "MultilineText"
                    }
                }
            },
            "externalVideo": {
                "label": "Video (External)",
                "name": "externalVideo",
                "nodeTypes": {
                    "title": {
                        "label": "Title",
                        "name": "title",
                        "nodeType": "NameField"
                    },
                    "excerpt": {
                        "label": "Excerpt",
                        "name": "excerpt",
                        "nodeType": "MultilineText"
                    },
                    "videoURL": {
                        "label": "Video URL",
                        "name": "videoURL",
                        "nodeType": "MultilineText"
                    },
                    "body": {
                        "label": "Body",
                        "name": "body",
                        "nodeType": "RichText"
                    },
                    "image": {
                        "label": "Image",
                        "name": "image",
                        "nodeType": "Media"
                    },
                    "alternateImage": {
                        "label": "Alternate Image",
                        "name": "alternateImage",
                        "nodeType": "Media"
                    },
                    "flag": {
                        "label": "Flag",
                        "name": "flag",
                        "nodeType": "MultilineText"
                    },
                    "eyebrow": {
                        "label": "Eyebrow",
                        "name": "eyebrow",
                        "nodeType": "MultilineText"
                    },
                    "metadata1": {
                        "label": "Metadata 1",
                        "name": "metadata1",
                        "nodeType": "MultilineText"
                    },
                    "metadata2": {
                        "label": "Metadata 2",
                        "name": "metadata2",
                        "nodeType": "MultilineText"
                    }
                }
            },
            "flexContent": {
                "label": "Flex!",
                "name": "flexContent",
                "nodeTypes": {
                    "title": {
                        "label": "Title",
                        "name": "title",
                        "nodeType": "NameField"
                    },
                    "body": {
                        "label": "Body",
                        "name": "body",
                        "nodeType": "RichText"
                    },
                    "excerpt": {
                        "label": "Excerpt",
                        "name": "excerpt",
                        "nodeType": "MultilineText"
                    },
                    "image": {
                        "label": "Image",
                        "name": "image",
                        "nodeType": "Media"
                    },
                    "alternateImage": {
                        "label": "Alternate Image",
                        "name": "alternateImage",
                        "nodeType": "Media"
                    },
                    "flag": {
                        "label": "Flag",
                        "name": "flag",
                        "nodeType": "MultilineText"
                    },
                    "eyebrow": {
                        "label": "Eyebrow",
                        "name": "eyebrow",
                        "nodeType": "MultilineText"
                    },
                    "metadata1": {
                        "label": "Metadata 1",
                        "name": "metadata1",
                        "nodeType": "MultilineText"
                    },
                    "metadata2": {
                        "label": "Metadata 2",
                        "name": "metadata2",
                        "nodeType": "MultilineText"
                    },
                    "videoURL": {
                        "label": "Video URL",
                        "name": "videoURL",
                        "nodeType": "MultilineText"
                    }
                }
            },
            "Banner_Ad": {
                "label": "Banner Ad",
                "name": "Banner_Ad",
                "nodeTypes": {
                    "Title": {
                        "label": "Title",
                        "name": "Title",
                        "nodeType": "NameField"
                    },
                    "image": {
                        "label": "Banner Image",
                        "name": "image",
                        "nodeType": "Media"
                    },
                    "teaser": {
                        "label": "Teaser",
                        "name": "teaser",
                        "nodeType": "MultilineText"
                    },
                    "date": {
                        "label": "Date",
                        "name": "date",
                        "nodeType": "Text"
                    },
                    "flag": {
                        "label": "Flag",
                        "name": "flag",
                        "nodeType": "Text"
                    },
                    "eyebrow": {
                        "label": "Eyebrow",
                        "name": "eyebrow",
                        "nodeType": "Text"
                    },
                    "ctaText": {
                        "label": "Call to Action Text",
                        "name": "ctaText",
                        "nodeType": "Text"
                    },
                    "ctaLink": {
                        "label": "Call to Action Link",
                        "name": "ctaLink",
                        "nodeType": "Url"
                    },
                    "metadata1": {
                        "label": "Metadata 1",
                        "name": "metadata1",
                        "nodeType": "MultilineText"
                    },
                    "metadata2": {
                        "label": "Metadata 2",
                        "name": "metadata2",
                        "nodeType": "MultilineText"
                    }
                }
            },
            "cms_image": {
                "label": "Image",
                "name": "cms_image",
                "nodeTypes": {
                    "source": {
                        "label": "Source",
                        "name": "source",
                        "nodeType": "MediaSource"
                    },
                    "thumbUrl": {
                        "label": "Link to Thumbnail",
                        "name": "thumbUrl",
                        "nodeType": "Url"
                    },
                    "title": {
                        "label": "Title",
                        "name": "title",
                        "nodeType": "NameField"
                    },
                    "altText": {
                        "label": "Alt Text",
                        "name": "altText",
                        "nodeType": "MultilineText"
                    }
                }
            }
        },
        "nextPageUrl": "/services/data/v49.0/connect/communities/0DB2w000000wr9JGAQ/managed-content/delivery?page=1&pageSize=25",
        "total": 25,
        "totalTypes": 5
    }
    )
  });
}

module.exports = {
  fakeRoutes
};