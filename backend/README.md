<div align="center">

# Backend

<p> The backend engine for the mmust ihub web application </p>

**Things to take note of**

#### dev_base_url: https://ihub-mu.vercel.app/

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

# Testimonials

## create testimonial

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/testimonials`
- **_method:_** `POST`

- **_Headers:_**

  - `Content-Type: multipart/form-data `

- **_request body_**:
  ```json
  "name": "name of th client",
  "occupation": "client's occupation",
  "message": "what the client has to say",
  "rating": "user rating 0-5",
  "image": "client's images"
  ```
  > **Response**
- status code: `201`
- response body:
  ```json
  "name": "name of th client",
  "occupation": "client's occupation",
  "message": "what the client has to say",
  "rating": "user rating 0-5",
  "image": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1725631396/mmust-ihub/xxyf52f4xx98eaz7vhae.png"
  ```

## Get testimonials (with pagination features)

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/testimonials`
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
      "_id": "66eb85ec981c8520150c0b62",
      "name": "Ralph Emmerich",
      "occupation": "Forward Integration Developer",
      "message": "Et deserunt voluptas temporibus nam ut.",
      "rating": 3,
      "imageUrl": "https://res.cloudinary.com/dlio7cpjo/image/upload/v1726711275/mmust-ihub/eajf6foc6ki5vimj6oqx.png",
    }
  ]
  ```

## Delete Testimonial

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/testimonials/{_id}`
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
    "message": "testimonial deleted successfully ..."
  }
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

# EVENTS
## create an event
> **request**

- url: `{{dev_base_url}}/api/v1/events`
- method: `POST`
- Authorization: `Bearer token`
- request body:
  ```json
  "title": "The title of the event",
  "short_description": "The short description to be displayed",
  "long_description": "A more detailed info about the event",
  "start_date": "YYYY-MM-DD should be in this form",
  "tags": ["Hackathon", "Community"]
  "event_link": "The link for the event registration"
  "image": "The image file fo the event"
  ```
  > **Response**
- status code: `201`
- response body:
  ```json
  { "status": "success",
    "message": "project created successfully"
   }
  ```
## Get upcoming events (with pagination features)

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/events/upcoming`
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
        "_id": "66f50c1f3a0238ca38255a6b",
        "title": "Voluptatem eaque ipsam.",
        "slug": "Voluptatem-eaque-ipsam.",
        "short_description": "Dolor enim odio et laudantium enim ducimus facere aspernatur. Quae aut a error atque harum dolores distinctio.",
        "long_description": "Libero voluptatibus inventore autem eum.",
        "start_date": "2024-06-24T10:28:54.000Z",
        "end_date": "2024-12-08T23:48:19.000Z",
        "tags": [
            "community",
            "event"
        ],
        "event_type": "in-person",
        "image_url": "https://image.localhost",
        "event_link": "https://aisha.com",
        "createdBy": "66f156c5c3d424e6edfc38d0",
        "__v": 0
    }
  ]
  ```
## Get past events (with pagination features)

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/events/past`
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
        "_id": "66f50c1f3a0238ca38255a6b",
        "title": "Voluptatem eaque ipsam.",
        "slug": "Voluptatem-eaque-ipsam.",
        "short_description": "Dolor enim odio et laudantium enim ducimus facere aspernatur. Quae aut a error atque harum dolores distinctio.",
        "long_description": "Libero voluptatibus inventore autem eum.",
        "start_date": "2024-06-24T10:28:54.000Z",
        "end_date": "2024-12-08T23:48:19.000Z",
        "tags": [
            "community",
            "event"
        ],
        "event_type": "in-person",
        "image_url": "https://image.localhost",
        "event_link": "https://aisha.com",
        "createdBy": "66f156c5c3d424e6edfc38d0",
        "__v": 0
    }
  ]

## Get past events (with pagination features)
> **request**

- **_url_**: `{{dev_base_url}}/api/v1/events/past`
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
        "_id": "66f50c1f3a0238ca38255a6b",
        "title": "Voluptatem eaque ipsam.",
        "slug": "Voluptatem-eaque-ipsam.",
        "short_description": "Dolor enim odio et laudantium enim ducimus facere aspernatur. Quae aut a error atque harum dolores distinctio.",
        "long_description": "Libero voluptatibus inventore autem eum.",
        "start_date": "2024-06-24T10:28:54.000Z",
        "end_date": "2024-12-08T23:48:19.000Z",
        "tags": [
            "community",
            "event"
        ],
        "event_type": "in-person",
        "image_url": "https://image.localhost",
        "event_link": "https://aisha.com",
        "createdBy": "66f156c5c3d424e6edfc38d0",
        "__v": 0
    }
  ]
  ```

## Get a single Event

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/events/details/{slug}`
- **_method:_** `GET`

- **_Headers:_**

  - `Content-Type: application/json`

> **Response**

- status code: `200`
- response body:
  ```json
  {
    "_id": "66f50c1f3a0238ca38255a6b",
    "title": "Voluptatem eaque ipsam.",
    "slug": "Voluptatem-eaque-ipsam.",
    "short_description": "Dolor enim odio et laudantium enim ducimus facere aspernatur. Quae aut a error atque harum dolores distinctio.",
    "long_description": "Libero voluptatibus inventore autem eum. Iure aspernatur sint quisquam. Vitae officiis sed et earum maiores. Cum nulla et voluptates rem iste aut aut.",
    "start_date": "2024-06-24T10:28:54.000Z",
    "end_date": "2024-12-08T23:48:19.000Z",
    "tags": [
        "community",
        "event"
    ],
    "event_type": "in-person",
    "image_url": "https://image.localhost",
    "event_link": "https://aisha.com",
    "createdBy": "66f156c5c3d424e6edfc38d0",
    "__v": 0
  }
  ```
## Delete project

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/events/{_id}`
- **_method:_** `Delete`

- **_Headers:_**

  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

> **Response**

- status code: `204`
- response body:
  ```json
  None
  ```

# Contact Us
## send us an email
> **request**

- url: `{{dev_base_url}}/api/v1/contact`
- method: `POST`
- request body:
  ```json
  "name": "The name of the user",
  "email": "The email of the user",
  "phone_number": "The phone number of the user",
  "message": "The body of the email"
  ```
  > **Response**
- status code: `200`
- response body:
  ```json
  { "status": "success",
    "message": "email sent successfully"
   }

# Donations
 <h2>1. Mpesa</h2>

### initiate payments using the mpesa payment gateway;

> **request**

- **_url_**: `{{dev_base_url}}/api/v1/donate/mpesa`
- **_method:_** `POST`

- **_Headers:_**

  - `Content-Type: application/json`

- **_request Body:_**
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

- Possible statuses are failed, success, pending
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
