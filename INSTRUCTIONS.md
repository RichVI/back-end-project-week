# Notes API

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Table of Contents
- [API Endpoints - GET](#GET)
- [API Endpoints - POST](#POST)
- [API Endpoints - PUT](#PUT)
- [API Endpoints - DELETE](#DELETE)

## API Endpoints
Base URL: https://infohub101.herokuapp.com
|Method|Route                           |Description              |
|------|--------------------------------|-------------------------|
|GET   |/api/notes                      |GET All Notes            |
|GET   |/api/notes/:id                  |GET Notes by ID          |
|POST  |/api/notes                      |POST New Notes           |
|PUT   |/api/notes/:id                  |UPDATE Note By ID        |
|DELETE|/api/notes/:id                  |DELETE Note By ID        |

## GET
## GET Notes Database Endpoint
```js
GET /api/notes
```
### Expected Response
```js
[
    {
        "id": 1,
        "title": "Test Note1 title",
        "content": "Test Note1 content"
    },
    {
        "id": 2,
        "title": "Test Note2 title",
        "content": "Test Note2 content"
    },
    {
        "id": 3,
        "title": "Test Note3 title",
        "content": "Test Note3 content"
    },
    {
        "id": 4,
        "title": "Test Note4 title",
        "content": "Test Note4 content"
    },
    {
        "id": 5,
        "title": "Test Note5 title",
        "content": "Test Note5 content"
    }
]
```

## GET Notes by ID Endpoint
```js
GET /api/notes/:id
```
### Expected Response
```js
{
    "id": 1,
    "title": "Test Note1 title",
    "content": "Test Note1 content"
}
```

## POST
## POST Notes Endpoint
```js
POST /api/notes
```
### Expected Body
```js
{
	"title": "Test Note title",
    "content": "Test Note content"
}
```
### Expected Response
```js
[
    6
]
```

## PUT
## PUT Notes Endpoint
```js
PUT /api/notes/:id
```
### Expected Body
```js
{
	"title": "Updated Test Note title",
    "content": "Updated Test Note content"
}
```
### Expected Response
```js
{
    "success": "Notes updated",
    "id": 6,
    "title": "Test Note6 title",
    "content": "Test Note7 content"
}
```

## DELETE 
## DELETE Notes Endpoint
```js
DELETE /api/notes/:id
```
### Expected Response
```js
{
    "success": "Note deleted",
    "id": 6
}
```