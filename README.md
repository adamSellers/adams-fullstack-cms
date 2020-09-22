# Fullstack CMS on Salesforce

This app is a showcase of the Salesforce CMS running in headless mode. The Salesforce Content Delivery API is leveraged to show a list of News articles that are authored in Salesforce CMS.

## Things TODO

1. Finish this readme.
2. Build out backend salesforce api calls
3. Start frontend stuff
4. everything else

## Installation Notes

This application is built to be deployed on Heroku, it uses Salesforce as the IDP so there are some configs you need to install and run.

### Environment Variables

The following environment variables are needed:

- APPURL - this is the url of your application where it's hosted (either whatever.herokuapp.com or localhost etc), used for the callback function in the auth flow.
- CLIENTID and CLIENTSECRET - these are used in the auth flow for the [connected app](https://help.salesforce.com/articleView?id=connected_app_create.htm&type=5). Be sure to setup your callback url in the connected app setup to be your APPURL (where the app is hosted) /auth/callback. eg: <https://adams-fullstack-cms.herokuapp.com/auth/callback>
- MONGOATLAS_URI - the connection string to your [mongo atlas](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/) database. Note, create a DB and a collection named 'users'.

### Deploy to Heroku

Click to deploy to Heroku.
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/adamSellers/adams-fullstack-cms)
