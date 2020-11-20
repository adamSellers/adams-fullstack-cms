import { FETCH_CONTENT } from '../actions/types';

// set the initial state first
const initialState = {
  isLoading: true,
  data: [],
  error: ""
}

// set the state depending on the dispatch coming in
const contentReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CONTENT:
      // reduce the returned state down to an array of options
      // filter here to limit to news articles only
      let count = 0;
      const contentList = [];
      action.payload['items'].forEach( el => {
        if(el.type === 'news') {
          let singleItem = {
            key: el.managedContentId,
            title: (el.contentNodes.title) ? el.contentNodes.title.value : null,
            excerpt: (el.contentNodes.excerpt) ? el.contentNodes.excerpt.value : null,
            typeLabel: (el.typeLabel) ? el.typeLabel: null,
            image: (el.contentNodes.bannerImage) ? el.contentNodes.bannerImage.url : null,
            imageAlt: (el.contentNodes.bannerImage) ? el.contentNodes.bannerImage.altText : null,
            body: (el.contentNodes.body) ? el.contentNodes.body.value : null
          }
          contentList.push(singleItem);
        }
      });
      return {...state, data: contentList, isLoading: false};
    case "ERROR":
      return {...state, error: action.msg};
    default:
      console.log(`it's returning the default state`);
      return state;
  }
}

export default contentReducer;

// {
//   "contentNodes": {
//       "bannerImage": {
//           "altText": "Houses with solar panels.",
//           "fileName": "optimized138310614.jpg",
//           "mediaType": "Image",
//           "mimeType": "image/jpeg",
//           "nodeType": "Media",
//           "resourceUrl": null,
//           "thumbnailUrl": null,
//           "title": "Thumbnail: Wind Energy Trade Show Coming Soon",
//           "unauthenticatedUrl": null,
//           "url": "/cms/delivery/media/UOER3_8JRVdRe6HnmlfJxLyRVYnKD6cDjMpasYeoVYE="
//       },
//       "excerpt": {
//           "nodeType": "MultilineText",
//           "value": "September 14 to 17 | Anaheim Convention Center, Anaheim, CA"
//       },
//       "body": {
//           "nodeType": "RichText",
//           "value": "&lt;p&gt;Given the enormous potential that the renewable energy industry has in the United States of America, it makes enormous good sense for companies in the said vertical to participate in renewable energy trade shows and conferences to expand their outreach, explore opportunities for new business development and trade show exhibit solutions to some of the most pressing challenges of clean energy.&lt;/p&gt;"
//       },
//       "title": {
//           "nodeType": "NameField",
//           "value": "Wind Energy Trade Show Coming Soon"
//       }
//   },
//   "contentUrlName": "wind-energy-trade-show-coming-soon",
//   "language": "en_US",
//   "managedContentId": "20Y2w000000U3BeEAK",
//   "publishedDate": "2020-07-30T17:23:35.000Z",
//   "title": "Wind Energy Trade Show Coming Soon",
//   "type": "news",
//   "typeLabel": "News"
// },