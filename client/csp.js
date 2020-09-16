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
      "https://adams-scv-demo.my.salesforce.com/"
    ],
    "font-src": [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    "style-src": [
      "'self'",
      "https://fonts.googleapis.com"
    ]
  }
}