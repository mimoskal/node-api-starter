define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Login",
    "version": "0.1.0",
    "name": "PostAuth",
    "group": "Auth",
    "filename": "server/routes/auth.route.js",
    "groupTitle": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"example@example.com\",\n    \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"success\": true,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjU4ZWJkOTgzNzU0NDQxNDNmZjliNGY5ZCIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImZpcnN0X25hbWUiOiJLb3ppb8WCZWsiLCJsYXN0X25hbWUiOiJNYXRvxYJlayIsInBhc3N3b3JkIjoicGFjYW5vdzEyMyIsImF2YXRhciI6Imh0dHBzOi8vYXBpLmFkb3JhYmxlLmlvL2F2YXRhcnMvMTI1L2tvemlvbGVrIiwidXBkYXRlZF9hdCI6IjIwMTctMDQtMTJUMTE6NTQ6MjAuMjY5WiIsImNyZWF0ZWRfYXQiOiIyMDE3LTA0LTEyVDExOjU0OjIwLjI2OVoifSwiaWF0IjoxNDk0MTU5NjcxLCJleHAiOjE0OTQyNDYwNzF9.ywmzBBKmt_7v8xYV7sk2oUPsjgTAwCH06ZSEY00M3Hk\",\n    \"message\": \"Enjoy your token!\",\n    \"time_ms\": 5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "400",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "400",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "400",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "401",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "401",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "\n{\n    \"code\": 400,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"field\": \"email\",\n            \"message\": \"\\\"email\\\" is required\"\n        },\n        {\n            \"field\": \"password\",\n            \"message\": \"\\\"password\\\" is required\"\n        }\n    ],\n    \"time_ms\": 27\n}",
          "type": "json"
        },
        {
          "title": "401",
          "content": "\n{\n    \"code\": 401,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"message\": \"Authentication failed.\"\n        }\n    ],\n    \"time_ms\": 29\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/quotes/:id",
    "title": "Delete quote",
    "version": "0.1.0",
    "name": "DeleteQuote",
    "group": "Quotes",
    "filename": "server/routes/quotes.route.js",
    "groupTitle": "Quotes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"success\": true,\n    \"message\": \"Object deleted successfully!\",\n    \"time_ms\": 8\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "401",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "401",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "404",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "404",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "{\n    \"code\": 401,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"field\": \"token\"\n            \"message\": \"Auth token has expired.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "{\n    \"code\": 404,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"message\": \"Item not found.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/quotes",
    "title": "List all quotes",
    "version": "0.1.0",
    "name": "GetAllQuotes",
    "group": "Quotes",
    "filename": "server/routes/quotes.route.js",
    "groupTitle": "Quotes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "200",
            "type": "Array[Object]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>Author name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.quote",
            "description": "<p>Quote body.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.length",
            "description": "<p>Quote length.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": ""
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "data.featured",
            "description": ""
          },
          {
            "group": "200",
            "type": "Array[String]",
            "optional": false,
            "field": "data.tags",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "stats",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "stats.query",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "stats.pagination",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.current_page",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.last_page",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.total_count",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.per_page",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"success\": true,\n    \"data\": [\n        {\n            \"_id\": \"590cd272b1f9731b6ce726c4\",\n            \"author\": \"Allen Saunders\",\n            \"quote\": \"Life is what happens to us while we are making other plans.\",\n            \"length\": 59,\n            \"updated_at\": \"2017-05-05T19:27:40.612Z\",\n            \"created_at\": \"2017-05-05T19:27:40.612Z\",\n            \"featured\": false,\n            \"tags\": [\n                \"life\"\n            ]\n        },\n    ]\n    \"stats\": {\n        \"pagination\": {\n            \"current_page\": 1,\n            \"last_page\": 2,\n            \"total_count\": 7,\n            \"per_page\": 5\n        }\n    },\n    \"message\": \"OK\",\n    \"time_ms\": 8\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "401",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "401",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "404",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "404",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "{\n    \"code\": 401,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"field\": \"token\"\n            \"message\": \"Auth token has expired.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "{\n    \"code\": 404,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"message\": \"Item not found.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/quotes/:id",
    "title": "Get single item",
    "version": "0.1.0",
    "name": "GetSingleQuote",
    "group": "Quotes",
    "filename": "server/routes/quotes.route.js",
    "groupTitle": "Quotes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>Author name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.quote",
            "description": "<p>Quote body.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.length",
            "description": "<p>Quote length.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": ""
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "data.featured",
            "description": ""
          },
          {
            "group": "200",
            "type": "Array[String]",
            "optional": false,
            "field": "data.tags",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"success\": true,\n    \"data\": {\n        \"_id\": \"590cd272b1f9731b6ce726c4\",\n        \"author\": \"Allen Saunders\",\n        \"quote\": \"Life is what happens to us while we are making other plans.\",\n        \"length\": 59,\n        \"updated_at\": \"2017-05-05T19:27:40.612Z\",\n        \"created_at\": \"2017-05-05T19:27:40.612Z\",\n        \"featured\": false,\n        \"tags\": [\n            \"life\"\n        ]\n    },\n    \"message\": \"OK\",\n    \"time_ms\": 8\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "401",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "401",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "404",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "404",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "{\n    \"code\": 401,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"field\": \"token\"\n            \"message\": \"Auth token has expired.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "{\n    \"code\": 404,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"message\": \"Item not found.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/quotes",
    "title": "Create new quote",
    "version": "0.1.0",
    "name": "PostQuote",
    "group": "Quotes",
    "filename": "server/routes/quotes.route.js",
    "groupTitle": "Quotes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quote",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array[String]",
            "optional": true,
            "field": "tags",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "featured",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>List of quotes (Array of Objects).</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>Author name.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "data.quote",
            "description": "<p>Quote body.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "data.length",
            "description": "<p>Quote length.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": ""
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": ""
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "data.featured",
            "description": ""
          },
          {
            "group": "201",
            "type": "Array[String",
            "optional": false,
            "field": "data.tags",
            "description": ""
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 201,\n    \"success\": true,\n    \"data\": {\n        \"_id\": \"590cd272b1f9731b6ce726c4\",\n        \"author\": \"Allen Saunders\",\n        \"quote\": \"Life is what happens to us while we are making other plans.\",\n        \"length\": 59,\n        \"updated_at\": \"2017-05-05T19:27:40.612Z\",\n        \"created_at\": \"2017-05-05T19:27:40.612Z\",\n        \"featured\": false,\n        \"tags\": [\n            \"life\"\n        ]\n    },\n    \"message\": \"OK\",\n    \"time_ms\": 8\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "401",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "401",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "404",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "404",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "{\n    \"code\": 401,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"field\": \"token\"\n            \"message\": \"Auth token has expired.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "{\n    \"code\": 404,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"message\": \"Item not found.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/quotes/:id",
    "title": "Update quote",
    "version": "0.1.0",
    "name": "PutSingleQuote",
    "group": "Quotes",
    "filename": "server/routes/quotes.route.js",
    "groupTitle": "Quotes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authorization token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quote",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array[String]",
            "optional": true,
            "field": "tags",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "featured",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>Author name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.quote",
            "description": "<p>Quote body.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "data.length",
            "description": "<p>Quote length.</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": ""
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "data.featured",
            "description": ""
          },
          {
            "group": "200",
            "type": "Array[String]",
            "optional": false,
            "field": "data.tags",
            "description": ""
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"success\": true,\n    \"data\": {\n        \"_id\": \"590cd272b1f9731b6ce726c4\",\n        \"author\": \"Allen Saunders\",\n        \"quote\": \"Life is what happens to us while we are making other plans.\",\n        \"length\": 59,\n        \"updated_at\": \"2017-05-05T19:27:40.612Z\",\n        \"created_at\": \"2017-05-05T19:27:40.612Z\",\n        \"featured\": false,\n        \"tags\": [\n            \"life\"\n        ]\n    },\n    \"message\": \"OK\",\n    \"time_ms\": 8\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "401",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "401",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "401",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "404",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": ""
          },
          {
            "group": "404",
            "type": "Array[Object]",
            "optional": false,
            "field": "errors",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.message",
            "description": ""
          },
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "errors.field",
            "description": ""
          },
          {
            "group": "404",
            "type": "Number",
            "optional": false,
            "field": "time_ms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "{\n    \"code\": 401,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"field\": \"token\"\n            \"message\": \"Auth token has expired.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "{\n    \"code\": 404,\n    \"error\": true,\n    \"errors\": [\n        {\n            \"message\": \"Item not found.\"\n        }\n    ],\n    \"time_ms\": 10\n}",
          "type": "json"
        }
      ]
    }
  }
] });
