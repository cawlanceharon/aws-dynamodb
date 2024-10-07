
# Node.js Express DynamoDB App

This is a simple Node.js Express API that integrates with AWS DynamoDB for basic CRUD operations. The API allows users to be added to DynamoDB and fetched by their ID.

## Folder Structure

```
nodejs-express-dynamodb-app/
│
├── controllers/
│   └── userController.js
├── services/
│   └── dynamoService.js
├── routes/
│   └── userRoutes.js
├── models/
│   └── userModel.js
├── config/
│   └── awsConfig.js
├── app.js
├── package.json
├── .env
└── .gitignore
```

## Setup

1. Clone the repository and navigate to the project folder.
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create a `.env` file and add your AWS credentials:
   ```bash
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   AWS_REGION=your-aws-region
   PORT=3000
   ```
4. Start the application:
   ```bash
   yarn start
   ```

## API Endpoints

- **POST /api/users/**: Add a new user
- **GET /api/users/:userId**: Get user by ID
