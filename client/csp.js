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
      "https:"
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