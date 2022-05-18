# WEB701-Project

# MERN-Full-Stack
MongoDB, Express.JS, React, Node.JS

## Link to secondary stack
https://github.com/Kenny-WilliamsStockdale/MESN-Full-Stack.git

## Project report
It is recommended that you read the report before starting the project.
The markdown (.md) version of the report is the best for viewing.

## Project Planning
The project planning Trello can be found here:https://trello.com/b/WsMGDNlb/web701-project

## How to start the application
`npm install` - to make sure you have the necessary npm modules.
1. Use `npm start` to launch the backend application only.
2. Use `npm run client` to launch the frontend application only.
3. Use `npm run dev` to launch both backend and frontend applications concurrently.

Check .env file reads the following:

PORT = 5001
MONGO_URI=mongodb+srv://WEB701Project:WEB701Project@cluster0.pumg5.mongodb.net/shop?retryWrites=true&w=majority

Database hosted via cloudbased hosting.

## How to test API stubs
1. Download the postman JSON file included in this repository.
2. Make sure the backend of the web app is running.
3. Open up postman and navigate to a workspace of your choice.
4. Use the import option and import the WEB701-Project Https Requests.postman_collection.json file into the workspace.
5. Run requests from here.
On a side note the environment url is set to localhost:5001/ to match the backend port. To change this you will have to manually enter in your new localhost environment port on each request.


