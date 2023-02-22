# Comments API

This is a Node.js application that provides an API for adding, reading, and searching comments. The application uses Elastic Search to store and search comments, and uses MySQL as its primary database to store comment metadata.

## Requirements

- Node.js
- MySQL
- Elastic Search
- Kafka
- Docker
- Kubectl

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env` file and fill in your environment variables
4. Start the server: `npm start`

## Usage

The server will be running at `http://localhost:3000`.

### Authentication

To use the API, you need to include a valid JWT token in the `Authorization` header of your requests. To get a token, send a `POST` request to `/auth/login` with a JSON payload containing your username and password:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```
Endpoints
The API has the following endpoints:

POST /comments: Adds a new comment. The request body should contain a JSON payload with the comment text and the ID of the user who posted the comment. Example:

```json
{
  "text": "This is a comment",
  "userId": 123
}

*GET /comments/:id: Gets a comment by ID.

*GET /comments: Searches for comments based on a search query. The search query is passed as a query parameter q. Example: /comments?q=foo.
