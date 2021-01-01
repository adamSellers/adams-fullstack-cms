const passport = require('passport');
const he = require('he');
const requireLogin = require('../middlewares/requireLogin');
// const serverLag = require('../middlewares/serverLag');
const axios = require('axios');

function contentRoutes(router) {
  /* Return a list of Channel ID's and names using the 
  content delivery API:
  {{_endpoint}}/services/data/v{{version}}/connect/cms/delivery/channels */
  router.get(
    '/api/v1/channels',
    requireLogin,
    async (req, res) => {
      try {
      console.log(`going to call ${req.user.sfInstanceUrl}/services/data/v${process.env.API_VERSION}/connect/cms/delivery/channels`);
      console.log(`actual bearer token: ${req.user.sfAccessToken}`);
      const communitiesResponse = await axios.get(`${req.user.sfInstanceUrl}/services/data/v${process.env.API_VERSION}/connect/cms/delivery/channels`, {
					headers: {
						'Authorization': `Bearer ${req.user.sfAccessToken}`
					}        
      });
      if (communitiesResponse.status === 200) {
        console.log(`communities response is: ${JSON.stringify(communitiesResponse.data)}`);
        res.status(200).send(communitiesResponse.data);
        } 
      } catch (error) {
        console.log(error);
			}
    }
  );

  /* Return a list of content for a given channel id, taken from the content delivery api
  /services/data/v{{version}}/connect/cms/delivery/channels/{{channelId}}/contents/query */
  router.get(
    '/api/v1/getContent/:channelId', 
    requireLogin,
    async (req, res) => {
      if (req.params.channelId) {
        console.log(`found networkdId: ${req.params.channelId}`);
        try {
          const contentResponse = await axios.get(`${req.user.sfInstanceUrl}/services/data/v49.0/connect/cms/delivery/channels/${req.params.channelId}/contents/query`, {
            headers: {
              'Authorization': `Bearer ${req.user.sfAccessToken}`
            }
          });
          if (contentResponse.status === 200) {
            // unescape html characters for sending to the front end
            const cleanItems = [];
            contentResponse.data.items.forEach( el => {
              if(el.type === 'news') {
                // test for image source
                let imageString = '';
                if(el.contentNodes.bannerImage && el.contentNodes.bannerImage.url.startsWith('https')) {
                  imageString = el.contentNodes.bannerImage.url;
                } else {
                  imageString = req.user.sfInstanceUrl + el.contentNodes.bannerImage.url
                }
                let singleItem = {
                  key: el.managedContentId,
                  title: (el.contentNodes.title) ? el.contentNodes.title.value : null,
                  excerpt: (el.contentNodes.excerpt) ? he.decode(el.contentNodes.excerpt.value) : null,
                  typeLabel: (el.typeLabel) ? el.typeLabel: null,
                  image: (el.contentNodes.bannerImage) ? imageString : null,
                  imageAlt: (el.contentNodes.bannerImage) ? el.contentNodes.bannerImage.altText : null,
                  body: (el.contentNodes.body) ? he.decode(el.contentNodes.body.value) : null
                }
                cleanItems.push(singleItem);
              }
            });
            console.log(`still sending old items but clean items are now: ${JSON.stringify(cleanItems)}`);
            res.status(200).send(contentResponse.data);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        res.status(200).send({msg: 'Please enter a channel ID'});
      }
  });
}

module.exports = {
  contentRoutes
};