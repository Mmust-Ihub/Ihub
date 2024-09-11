<div align="center">

# Backend

<p> The backend engine for the mmust ihub web application </p>

**Things to take note of**

#### dev_base_url: https://ihub-backend-seven.vercel.app

#### prod_base_url: "http://localhost:3000"

</div>

## Getting started

1. clone the respository
   ```shell
   $ git clone https://github.com/David-mwas/ihub-backend.git
   $ cd backend
   $ touch .env
   ```
2. Add the following variables to the .env file
   ```
   PORT = [port your that your server will run on]
   mongoDbUrl = [mongodburl]
   mongoDbName = [name of the database]
   AccessTokenSecretKey = [random string ]
   AccessTokenExpires = [the time before which the access token should expire eg 1h or 1d or 7d]
   ```

## Registration

> **request**

- url: {dev_base_url}/api/v1/auth/register
- method: POST
- example of a request body:
  ```json
  {
    "username": "Antony",
    "email": "antonygichoya1@gmail.com",
    "password": "password",
    "confirm_password": "password"
  }
  ```
  > **response**

* status code: `201` if success else `400`
* response body:

```json
   "status": "success",
   "message": "user registerd successfully",
```

## Login

> **request**

- url: {{dev_base_url}}/api/v1/auth/login
- method: POST
- request body:
  ```json
  "email": "string"
  "password": "string"
  ```
  > **response**
- status code: `200` if success else `401`
- response body:

```json
   "status": "success",
   "access_token": "<user access token >",
```

## Get Profile

> **request**

- url: {{dev_base_url}}/api/v1/user/profile
- method: GET

> **response**

- status code: `200`
- example of a response body:

```json
   "username": "maich",
   "email": "mainamaich@gmail.com",
```

## Edit Profile

> **request**

- url: {{dev_base_url}}/api/v1/user/edit-profile
- method: POST

* request body:
  ```
  username: string optional
  email: string optional
  password: string optional
  confirm_password: ref(password)
  ```

> **response**

- status code: `200`
- response body:

```json
   "first_name": "maich",
   "last_name": "magode",
   "email": "mainamaich@gmail.com",
```

## Forget Password

> **request**

- url: {{dev_base_url}}/api/v1/user/forget-password
- method: POST

* request body:
  ```
  email: string
  ```

> **response**

- status code: `200`
- response body:

```json
   "success": "change password link sent to the user email",
```

- `Forgot password` email is sent to the user with a token as a query param

## Reset Password

> **request**

- url: {{dev_base_url}}/api/v1/user/reset-password
- method: GET

* query params:
  ```
  token: string
  ```
  ```json
  example of a url: {{dev_base_url}}/api/v1/auth/reset-password?token="random string"
  ```

> **response**

- status code: `200`
- response body:

```json
   "email": "users email",
```

- `User email` is sent to the frontend if the token was valid.

## Reset Password

> **request**

- url: {{dev_base_url}}/api/v1/user/reset-password
- method: POST

* query params:
  ```
  token: string
  ```
* request body :

```json
{
  "password": "The new password",
  "email": "users email"
}
```

> **response**

- status code: `200`
- response body:

```json
   "success": "password set successfully",
```

# PROJECTS

## create project

> **request**

- url: `{{dev_base_url}}/api/v1/projects`
- method: `POST`
- Authorization: `Bearer token`
- request body:
  ```json
  "title": "title for the project",
  "headline": "The brief project description that will be desplayed to the user",
  "description": "The body of the project",
  "category": "any of the following [web, android, machine, artificial, blockchain, robotics, iot]",
  "image": "image file for the blog"
  ```
  > **Response**
- status code: `201`
- response body:
  ```json
  "title": "This is a simple project"
  "slug": "This-is-a-simple-project"
  "headline": "This is the headline of the this web project"
  "description": "This is the body that explains everything about the project",
  "image": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1725631396/mmust-ihub/xxyf52f4xx98eaz7vhae.png"
  ```

## Get projects (with pagination features)

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/projects`
- **_method:_** `GET`

- **_Headers:_**

  - `Content-Type: application/json`

- **_Optional query parameters:_**

| Parameter |  Type   | Default |
| :-------: | :-----: | :-----: |
|   page    | integer |    0    |
|  perPage  | integer |    5    |

> **Response**

- status code: `200`
- response body:
  ```json
  [
    {
      "title": "This is a simple project",
      "slug": "This-is-a-simple-project",
      "headline": "This is the headline of the this web project",
      "description": "This is the body that explains everything about the project",
      "category": "machine",
      "imageUrl": "https://res.cloudinary.com/dlio7cpjo/image/upload/,v1725631396/mmust-ihub/xxyf52f4xx98eaz7vhae.png"
    }
  ]
  ```

## Get projects in a specific category (with pagination features)

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/projects/category`
- **_method:_** `GET`

- **_Headers:_**

  - `Content-Type: application/json`

- **_Optional query parameters:_**

| Parameter |  Type   | Default |
| :-------: | :-----: | :-----: |
| category  | string  |   web   |
|   page    | integer |    0    |
|  perPage  | integer |    5    |

> **Response**

- status code: `200`
- response body:
  ```json
  [
    {
      "title": "This is a simple project",
      "slug": "This-is-a-simple-project",
      "headline": "This is the headline of the this web project",
      "description": "This is the body that explains everything about the project",
      "category": "web",
      "imageUrl": "https://res.cloudinary.com/dlio7cpjo/image/upload/,v1725631396/mmust-ihub/xxyf52f4xx98eaz7vhae.png"
    }
  ]
  ```

## Get a single project

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/projects/{slug}`
- **_method:_** `GET`

- **_Headers:_**

  - `Content-Type: application/json`

> **Response**

- status code: `200`
- response body:
  ```json
  [
    {
      "title": "This is a simple project",
      "slug": "This-is-a-simple-project",
      "headline": "This is the headline of the this web project",
      "description": "This is the body that explains everything about the project",
      "category": "web",
      "imageUrl": "https://res.cloudinary.com/dlio7cpjo/image/upload/,v1725631396/mmust-ihub/xxyf52f4xx98eaz7vhae.png"
    }
  ]
  ```

## Delete project

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/projects/{_id}`
- **_method:_** `Delete`

- **_Headers:_**

  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

> **Response**

- status code: `200`
- response body:
  ```json
  {
    "status": "success",
    "message": "project deleted successfully ..."
  }
  ```

# Donations

 <h2>1. Mpesa</h2>

### initiate payments using the mpesa payment gateway;

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/donate/mpesa`
- **_method:_** `POST`

- **_Headers:_**

  - `Content-Type: application/json`

- **_Body:_**
  ```json
  {
    "email": "email of the donor",
    "phoneNumber": "254....",
    "amount": 1
  }
  ```

> **Response**

- status code: `200`
- response body:
  ```json
  {
    "status": "Success. Request accepted for processing",
    "checkoutRequestId": "ws_CO_10092024194005201743596183"
  }
  ```
### Check on the transaction status.
> This requires you to poll this endpoint at a certain interval to check the status of the transaction.
- The possible statuses are failed, success, pending
- One you get the failed status, it means the user cancelled the transaction hence your program should stop the poll.

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/donate/mpesa/{checkoutRequestId}`
- **_method:_** `GET`

- **_Headers:_**

  - `Content-Type: application/json`

> **Response**

- status code: `200`
- example of a response body:
  ```json
  {
    "status": "success"
  }
  ```


 <h2>2. Mastercard payment </h2>

> Working on it ...
