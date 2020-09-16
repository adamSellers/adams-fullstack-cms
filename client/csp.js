module.exports = {
  prod: {
    "default-src": [
      "'self'",
      "https://*.salesforce.com"],
    "img-src": [
      "'self'",
      "https:"
    ],
    "font-src": [
      "'self'",
      "data:"
    ],
    "style-src": [
      "'self'",
      "data:"
    ]
  }
}