## Introduction

Overview of the USER API and its usage.

## Authentication

Description of how to authenticate with the API.

### Request

```http
POST  /api/users/signin
```

### Parameters

| Parameter  | Type     | Description                   |
| :--------- | :------- | :---------------------------- |
| `email`    | `string` | Your email **_Required_**.    |
| `password` | `string` | Your password **_Required_**. |

### Response

```json
{
  "token": "your-api-token"
}
```

## Registration

Description of how to Register with the API.

### Request

```http
POST  /api/users/signup
```

### Parameters

| Parameter   | Type     | Description                    |
| :---------- | :------- | :----------------------------- |
| `email`     | `string` | Your email **_Required_**.     |
| `password`  | `string` | Your password **_Required_**.  |
| `firstname` | `string` | Your firstname **_Required_**. |
| `lastname`  | `string` | Your lastname **_Required_**.  |
| `username`  | `string` | Your username **_Required_**.  |

### Response

```json
{
  "_id": "ObjectId(id)",
  "firstname": "Harshith",
  "lastname": "Bandam",
  "email": "reddybharshith3@gmail.com",
  "user_role": "USER",
  "is_verified": false,
  "username": "Harshith1629",
  "password": "hashed password",
  "pass_change_allowed": false,
  "blog_ids": [],
  "component_ids": [],
  "verification_id": "0a1f6a28-a1e6-4f3e-81d6-4acd4c143633",
  "user_logs": [
    {
      "event": "login",
      "description": "User loggedin at Mon Jul 29 2024 17:11:36 GMT+0530 (India Standard Time)",
      "time": "Mon Jul 29 2024 17:11:36 GMT+0530 (India Standard Time)",
      "_id": "66a77ff03892c79ea559bc95"
    }
  ],
  "createdAt": "2024-07-20T14:48:15.466Z",
  "updatedAt": "2024-08-03T15:36:04.038Z",
  "__v": 0
}
```

## Users

Description of how to get user details with the API.

### Request

```http
GET  /api/users
```

### Parameters

No params

**Req**

```javascript
{
header:{
    authorization: "Bearer {token}",
    ...
    }
}
```

This Token carry below values

```js
{
  _id: `user_id`,
  firstname:`first name of user` ,
  name: `name`,
  email:`email of the user` ,
  user_role: `role of the user`,
  is_verified: `status of user verification in boolean  (true -> verified , false -> not verified)`
}
```

### Response

#### Response for admin

```json
[
  {
    "_id": "ObjectId(id)",
    "firstname": "Harshith",
    "lastname": "Bandam",
    "email": "reddybharshith3@gmail.com",
    "user_role": "USER",
    "is_verified": false,
    "username": "Harshith1629",
    "password": "hashed password",
    "pass_change_allowed": false,
    "blog_ids": [],
    "component_ids": [],
    "verification_id": "0a1f6a28-a1e6-4f3e-81d6-4acd4c143633",
    "user_logs": [
      {
        "event": "login",
        "description": "User loggedin at Mon Jul 29 2024 17:11:36 GMT+0530 (India Standard Time)",
        "time": "Mon Jul 29 2024 17:11:36 GMT+0530 (India Standard Time)",
        "_id": "66a77ff03892c79ea559bc95"
      }
    ],
    "createdAt": "2024-07-20T14:48:15.466Z",
    "updatedAt": "2024-08-03T15:36:04.038Z",
    "__v": 0
  }
  // ...
]
```

#### Response for user

```json
{
  "_id": "ObjectId(id)",
  "firstname": "Harshith",
  "lastname": "Bandam",
  "email": "reddybharshith3@gmail.com",
  "user_role": "USER",
  "is_verified": false,
  "username": "Harshith1629",
  "password": "hashed password",
  "pass_change_allowed": false,
  "blog_ids": [],
  "component_ids": [],
  "verification_id": "0a1f6a28-a1e6-4f3e-81d6-4acd4c143633",
  "user_logs": [
    {
      "event": "login",
      "description": "User loggedin at Mon Jul 29 2024 17:11:36 GMT+0530 (India Standard Time)",
      "time": "Mon Jul 29 2024 17:11:36 GMT+0530 (India Standard Time)",
      "_id": "66a77ff03892c79ea559bc95"
    }
  ],
  "createdAt": "2024-07-20T14:48:15.466Z",
  "updatedAt": "2024-08-03T15:36:04.038Z",
  "__v": 0
}
```
