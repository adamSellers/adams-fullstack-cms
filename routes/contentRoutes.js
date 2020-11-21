const passport = require('passport');
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
            console.log(`we have content for ${req.params.channelId}! Content returned: ${JSON.stringify(contentResponse.data)}`);
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