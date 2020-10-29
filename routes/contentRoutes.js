const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
// const serverLag = require('../middlewares/serverLag');
const axios = require('axios');

function contentRoutes(router) {
  /* Return a list of community ID's and names using the 
  content delivery API:
  {{_endpoint}}/services/data/v{{version}}/connect/communities */
  router.get(
    '/api/v1/communities',
    requireLogin,
    async (req, res) => {
      try {
      console.log(`going to call ${req.user.sfInstanceUrl}/services/data/v${process.env.API_VERSION}/connect/communities`);
      console.log(`actual bearer token: ${req.user.sfAccessToken}`);
      const communitiesResponse = await axios.get(`${req.user.sfInstanceUrl}/services/data/v49.0/connect/communities`, {
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

  /* Return a list of content for a given community id, filter out
  by content type from the dropdown. Grabbed from the content
  deliver API: 
  /services/data/v{{version}}/connect/communities/0DB2w000000wr9JGAQ/managed-content/delivery */
  router.get(
    '/api/v1/getContent', 
    requireLogin,
    async (req, res) => {
			try {
				const contentResponse = await axios.get(`${req.user.sfInstanceUrl}/services/data/v49.0/connect/communities/0DB2w000000wr9JGAQ/managed-content/delivery`, {
					headers: {
						'Authorization': `Bearer ${req.user.sfAccessToken}`
					}
				});
				if (contentResponse.status === 200) {
					res.status(200).send(contentResponse.data);
				}
			} catch (error) {
				console.log(error);
			}
  });
}

module.exports = {
  contentRoutes
};