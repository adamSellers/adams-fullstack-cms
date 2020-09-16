module.exports = {
    dev: {
    "default-src": ["'self'"],
    "img-src": [
        "'self'",
        "https://adams-scv-demo.my.salesforce.com",
      ]
    },
    prod: {
    "default-src": "'self'",  // can be either a string or an array.
    "img-src": [
      "'self'",
      "https://adams-scv-demo.my.salesforce.com",
    ]
    }
  }