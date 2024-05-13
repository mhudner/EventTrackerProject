<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

# Event Tracker Project

## Description of Project

Event Tracker project serves to utilize JSON and SpringREST in conjunction with JavaScript to create a front-end application. With the primary focus being on handling JSON responses with JavaScript while interacting with a RESTful API built with Spring Boot.

## Technologies Used

- Java Persistence API (JPA): For entity modeling and database management

- Spring Boot: For configuring a RESTful API

- Spring Data JPA: For handling CRUD operations

- MySQL Workbench: For designing the database schema

- Git/GitHub: Version control and project management

- Postman: Testing REST API endpoints

- AWS EC2: Deployment of the application

- Integrating scripts into a web application

- Sending asynchronous requests to Java controllers using JavaScript's `XMLHttpRequest`

- Consuming and parsing JSON responses with JavaScript

- Dynamically building HTML with JavaScript

- Sending POST/PUT/DELETE requests with `XMLHttpRequest`

## Lessons Learned

1. Integration of Backend and Frontend:

Understanding how to integrate a backend RESTful API with a frontend JavaScript application is crucial. This involves effectively communicating between the two layers, handling data formats (such as JSON), and ensuring seamless interaction.

2. Asynchronous Communication:

Mastery of asynchronous communication using JavaScript's XMLHttpRequest is fundamental. This includes handling asynchronous requests and responses, managing callbacks or promises, and ensuring proper error handling.

3. Dynamic DOM Manipulation:

Learning how to dynamically manipulate the Document Object Model (DOM) using JavaScript is essential for building interactive web applications. This involves creating, modifying, and removing HTML elements based on user actions or data updates.

4. Understanding JSON:

Comprehensive understanding of JavaScript Object Notation (JSON) is necessary, including parsing JSON responses, constructing JSON objects, and effectively working with JSON data structures.

5. CRUD Operations:

Implementing Create, Read, Update, and Delete (CRUD) operations on data entities is a fundamental aspect of web development. This includes designing RESTful endpoints, handling HTTP methods (GET, POST, PUT, DELETE), and ensuring data integrity.

6. Data Aggregation and Presentation:

Incorporating data aggregation and presenting information in alternative formats enhances the usability and functionality of web applications. This involves processing and summarizing data to provide meaningful insights or additional functionalities.

7. Error Handling and Debugging:

Proficiency in error handling and debugging is essential for identifying and resolving issues in web applications. This includes logging errors, handling exceptions, and utilizing browser developer tools for debugging.

## AWS IP address
http://52.15.116.77:8080/BooksREST

## REST route URIs 

| Return 		   | Type	 | Route				         |	Functionality						  |
|------------------|---------|-------------------------------|----------------------------------------|
| Book   		   | GET 	 | api/books/{id}		         | Gets one post by Id					  |
| List < Book >	   | GET 	 | api/books			         | Gets all books in the database		  |
| Book		  	   | POST    | api/books			         | Creates a new book entity		      |
| Book             | PUT	 | api/books/{id}		         | Updates books already in the database  |
| void             | DELETE  | api/books/{id}		         | Deletes books from the database	      |
| List < Book >    | GET     | api/books/genre/{genre}	     | Gets books by Genre	                  |
| List < Book >    | GET     | api/books/author/{author}	 | Gets books by Author	                  |
| List < Book >    | GET     | api/books/readstatus/{status} | Gets books by Read Status              |


</body>
</html>