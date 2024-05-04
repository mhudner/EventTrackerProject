package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Book;
import com.skilldistillery.eventtracker.services.BookService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("api")
public class BookController {


	private BookService bookService;

	public BookController(BookService bookService) {
		super();
		this.bookService = bookService;
	}

	
	@GetMapping("books/{id}")
	public Book findById(@PathVariable(name="id") int id) {
		return bookService.findById(id);
	}
	
	@GetMapping("books")
	public List<Book> findAll() {
		return bookService.findAll();

	}
	
	@PostMapping("books")
	public Book create(@RequestBody Book book, HttpServletRequest request, HttpServletResponse response) {
		Book createdBook = bookService.create(book);
		return createdBook;
		
	}
	
	@PutMapping("books/{id}")
	public Book update(@PathVariable(name="id") int id, @RequestBody Book book, HttpServletRequest request, HttpServletResponse response) {
		Book updatedBook = bookService.update(id , book);
		return updatedBook;
		
	}
	
	@DeleteMapping("books/{id}")
	public void delete(@PathVariable("id") int id) {
		bookService.delete(id);
	}
	
	
	
	
	
}
