define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authentication",
    "name": "Authentication_Login",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Should be application/json for /auth</p>"
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
            "field": "username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_code",
            "description": "<p>JWT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjM5MDA4MGExLWY0ZjctMTFlNS04NTRkLTI4ZDI0NDQyZDNlNyIsImlhdCI6MTQ1OTE3ODE0NSwibmJmIjoxNDU5MTc4MTQ1LCJleHAiOjE0NTkxNzg0NDV9.nx_1a4RmvJ7Vlf1CvnMzqoTfzChcuJnDb1Tjy1_FnXw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Invalid Credentials",
          "content": "{\n  \"description\": \"Invalid credentials\",\n  \"error\": \"Bad Request\",\n  \"status_code\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "healthify/functionality/auth.py",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9999/auth"
      }
    ]
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "User Signup",
    "name": "Signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Created user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"created\": true,\n  \"username\": \"test@test.com\",\n  \"user_id\" : \"010c1f06-3971-4e43-bf27-a03b9f5d1e70\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Username is required",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": {\n    \"username\": \"SIGNUP-REQ-USERNAME\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Username already exists",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": {\n    \"username\": \"SIGNUP-EXISTS-USERNAME\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "healthify/resources/auth.py",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9999/signup"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "User",
    "name": "Signup",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"created_on\": true,\n  \"username\": \"test@test.com\",\n  \"first_name\" : \"test\",\n  \"last_name\" : \"test\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Bad Username Provided",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": {\n    \"username\": \"BAD-USER-ID\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "healthify/resources/auth.py",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:9999/user"
      }
    ]
  }
] });
