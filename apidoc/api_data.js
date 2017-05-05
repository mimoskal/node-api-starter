define({ "api": [
  {
    "type": "get",
    "url": "/favs",
    "title": "List all quotes",
    "version": "0.1.0",
    "name": "NodeApiStarter",
    "group": "Favs",
    "header": {
      "fields": {
        "Favs": [
          {
            "group": "Favs",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of quotes (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>Author name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.quote",
            "description": "<p>Quote body.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.length",
            "description": "<p>Quote length.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats.query",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/favs.route.js",
    "groupTitle": "Favs"
  },
  {
    "type": "get",
    "url": "/quotes/:id",
    "title": "Get single item",
    "version": "0.1.0",
    "name": "GetQuote",
    "group": "Quotes",
    "header": {
      "fields": {
        "Quotes": [
          {
            "group": "Quotes",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of quotes (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>Author name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.quote",
            "description": "<p>Quote body.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.length",
            "description": "<p>Quote length.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.featured",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.tags",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats.query",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats.pagination",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.current_page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.last_page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.total_count",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.per_page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/quotes.route.js",
    "groupTitle": "Quotes"
  },
  {
    "type": "get",
    "url": "/quotes",
    "title": "List all quotes",
    "version": "0.1.0",
    "name": "GetQuotes",
    "group": "Quotes",
    "header": {
      "fields": {
        "Quotes": [
          {
            "group": "Quotes",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response HTTP code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of quotes (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.author",
            "description": "<p>Author name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.quote",
            "description": "<p>Quote body.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.length",
            "description": "<p>Quote length.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.featured",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.tags",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats.query",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stats.pagination",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.current_page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.last_page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.total_count",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stats.pagination.per_page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/quotes.route.js",
    "groupTitle": "Quotes"
  }
] });
