<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

# EventTrackerProject

## Description of Project

Event Tracker is a weekend project aimed at creating a RESTful API for tracking various events or activities. We were told to create a single table with trackable data 

## Technologies Used

- Java Persistence API (JPA): For entity modeling and database management.
- Spring Boot: For configuring a RESTful API.
- Spring Data JPA: For handling CRUD operations.
- MySQL Workbench: For designing the database schema.
- Git/GitHub: Version control and project management.
- Postman: Testing REST API endpoints.
- AWS EC2: Deployment of the application.




## Lessons Learned

1. Entity Modeling: Understanding how to create Java entity classes that map to database tables using JPA.

2. Spring Boot Configuration: Configuring a Spring Boot application to expose REST API endpoints and handle JSON data.

3. CRUD Operations: Implementing Create, Read, Update, and Delete operations for managing events.

4. Database Design: Designing a database schema using MySQL Workbench and forward engineering it.

5. Deployment: Deploying a Spring Boot application to an AWS EC2 instance and linking it to a portfolio website.

## REST route URIs 

| Return 		| Type	 | Route				  |	Functionality						  |
|---------------|--------|------------------------|---------------------------------------|
| Book   		| GET 	 | api/books/{id}		  | Gets one post by Id					  |
| List <Book>	| GET 	 | api/books			  | Gets all books in the database		  |
| Book		  	| POST   | api/books			  | Creates a new book entity		      |
| Book          | PUT	 | api/books/{id}		  | Updates books already in the database |
| void          | DELETE | api/books/{id}		  | Deletes books from the database	      |
</body>
</html>