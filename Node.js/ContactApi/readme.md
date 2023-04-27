# Contact API

This is a RESTful API for managing contacts. Users can perform CRUD operations on their contacts, and can register and login using JWT tokens.

## Features
- CRUD operations on contacts (create, read, update, delete)
- User registration and login using JWT tokens
- Custom middleware for JWT token authentication

## Technologies Used
- JavaScript
- Express.js
- Mongoose
- bcryptjs
- dotenv
- express-async-handler
- jsonwebtoken

## Installation
1. Clone the repository to your local machine
2. Create a `.env` file in the root directory and add the following environment variables:

```ini
PORT=<PORT_NUMBER>
CONNECTION_STRING=<CONNECTION_STRING_TO_YOUR_DATABASE>
SECRET_KEY=<YOUR_SECRET_KEY_FOR_JWT>
```

3. Run `npm install` to install the dependencies
4. Run `npm start` to start the server

## Usage
1. Register a new user by sending a POST request to `/api/users/register` with a JSON body containing `name`, `email`, and `password` fields.
2. Login with the registered user by sending a POST request to `/api/users/login` with a JSON body containing `email` and `password` fields. The response will contain a JWT token.
3. Use the JWT token in the `Authorization` header as a `Bearer` token to access protected routes, such as `/api/contact/`. 
4. Use the endpoints provided to perform CRUD operations on contacts.

## Examples

```yaml
// Example of registering a new user
POST /api/users/register
{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "password123"
}

// Example of logging in with a registered user
POST /api/users/login
{
"email": "john.doe@example.com",
"password": "password123"
}

// Example of creating a new contact with a JWT token
POST /api/contact/
Authorization: Bearer <JWT_TOKEN>
{
"name": "Jane Doe",
"email": "jane.doe@example.com",
"phone": "123-456-7890"
}

// Example of updating a contact with a JWT token
PUT /api/contact/:id
Authorization: Bearer <JWT_TOKEN>
{
"name": "Jane Doe",
"email": "jane.doe@example.com",
"phone": "987-654-3210"
}

// Example of deleting a contact with a JWT token
DELETE /api/contact/:id
Authorization: Bearer <JWT_TOKEN>
```


## Known Issues
There are currently some issues with error handling that need to be resolved.

## Contributing
Your Contact API is open source and contributions are welcome. To contribute, simply fork the repository and submit a pull request.
