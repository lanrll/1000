define({ "api": [
  {
    "type": "post",
    "url": "/del",
    "title": "Remove document",
    "name": "removedoc",
    "group": "Remove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
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
            "field": "status",
            "description": "<p>0 成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Remove"
  },
  {
    "type": "post",
    "url": "/reg",
    "title": "注册用户",
    "name": "registeruser",
    "group": "register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
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
            "field": "status",
            "description": "<p>0 成功   -1 失败</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "register"
  }
] });
