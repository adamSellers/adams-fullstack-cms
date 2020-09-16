module.exports = {
  prod: {
    "default-src": [
      "'self'"
    ],
    "connect-src": [
      "'self'",
      "https://login.salesforce.com"
    ],
    "img-src": [
      "'self'",
      "https://*.salesforce.com",
      "https://*.documentforce.com"
    ],
    "font-src": [
      "'self'",
      "https://fonts.gstatic.com",
      "data:"
    ],
    "style-src": [
      "'self'",
      "https://fonts.googleapis.com"
    ]
  }
}