# E-commerce Back End Starter Code
An e-commerce backend application that allows users to manage products, categories, and tags. The application is built using Node.js, Express.js, Sequelize ORM, and MySQL.

## Table of Contents
User Story
Installation
Usage
API Routes
Contributors
## User Story
As a manager at an internet retail company, I want a back-end for my e-commerce website that uses the latest technologies so that my development team can quickly create new APIs for customers to perform product management tasks.

## Installation
To install the dependencies required for this project, follow these steps:

Clone the repository to your local machine.
Navigate to the project's root directory in the terminal.
Run npm install to install the necessary packages:
sequelize
dotenv
mysql2
bcrypt
eslint
Run npm install again to ensure all dependencies are installed correctly.
Run npm run seed to seed the database with initial data.
Run node server.js to start the server.
## Usage
After following the installation steps, use an API testing tool like Insomnia or Postman to test the API routes for managing products, categories, and tags.

![226720070-44f805ca-3a45-44d1-be95-9e74fc66fc68](https://user-images.githubusercontent.com/114943155/226720133-7875adc4-5c8b-4d34-b463-e805be0a4354.jpg)


## API Routes
GET /api/products: Retrieve all products with their associated category and tag data.

GET /api/products/:id: Retrieve a single product by its ID with its associated category and tag data.

POST /api/products: Create a new product.

PUT /api/products/:id: Update a product by its ID.

DELETE /api/products/:id: Delete a product by its ID.

GET /api/categories: Retrieve all categories with their associated products.

GET /api/categories/:id: Retrieve a single category by its ID with its associated products.

POST /api/categories: Create a new category.

PUT /api/categories/:id: Update a category by its ID.

DELETE /api/categories/:id: Delete a category by its ID.

GET /api/tags: Retrieve all tags with their associated products.

GET /api/tags/:id: Retrieve a single tag by its ID with its associated products.

POST /api/tags: Create a new tag.

PUT /api/tags/:id: Update a tag by its ID.

DELETE /api/tags/:id: Delete a tag by its ID.

## Contributors
Ryan Hood
github: github.com/ryanhood10

Feel free to reach out to the creator, Ryan Hood, for any questions or suggestions. Happy coding!
