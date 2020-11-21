# Fullstack CMS on Salesforce

This app is a showcase of the Salesforce CMS running in headless mode. The Salesforce Content Delivery API is leveraged to show a list of News articles that are authored in Salesforce CMS.

## License'y Stuff

Copyright 2020 Adam Sellers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Installation Notes

This application is built to be deployed on Heroku, it uses Salesforce as the IDP so there are some configs you need to install and run.

### Technologies Used

This app was built to be primarily run in the Salesforce stack. This includes:

- Salesforce Identity: the app uses a core SF org to provide authentication. Be sure to create your connected app to run (see below)
- Heroku: The app is designed to be built and run on Heroku, click the Heroku button below to get started!
- Redis: Session store is done in Heroku Redis
- Mongo DB: The relational DB bits, which is only storing user information at present, is done through Mongo DB. As of Nov 2020, mLab has removed their Heroku addon (boo!) but you can still create a free tier at Mongo Atlas. This is recommended to keep the app free to use as Object Rocket (the other Mongo addon in Heroku) doesn't have a free tier.
- React / Redux: This is a react front end with Redux for the state store. Probably doesn't _need_ Redux specifically, but the point of building this was for me to learn, so Redux is in.
- Express: The backend is provided by Express.

### Environment Variables

The following environment variables are needed:

- APPURL - this is the url of your application where it's hosted (either whatever.herokuapp.com or localhost etc), used for the callback function in the auth flow.
- CLIENTID and CLIENTSECRET - these are used in the auth flow for the [connected app](https://help.salesforce.com/articleView?id=connected_app_create.htm&type=5). Be sure to setup your callback url in the connected app setup to be your APPURL (where the app is hosted) /auth/callback. eg: <https://adams-fullstack-cms.herokuapp.com/auth/callback>
- MONGOATLAS_URI - the connection string to your [mongo atlas](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/) database. Note, create a DB and a collection named 'users'.
- API_VERSION - this is the version of the Salesforce API you wish to connect to. Min V49.0!

### Deploy to Heroku

Click to deploy to Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/adamSellers/adams-fullstack-cms)
