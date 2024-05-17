package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.skilldistillery.eventtracker.entities.Book;
import com.skilldistillery.eventtracker.services.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/{id}")
    public Book findById(@PathVariable("id") int id) {
        Book book = bookService.findById(id);
        if (book != null) {
            return book;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
    }

    @GetMapping
    public List<Book> findAll() {
        return bookService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book create(@RequestBody Book book) {
        return bookService.create(book);
    }

    @PutMapping("/{id}")
    public Book update(@PathVariable("id") int id, @RequestBody Book book) {
        Book updatedBook = bookService.update(id, book);
        if (updatedBook != null) {
            return updatedBook;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") int id) {
    	bookService.delete(id);
     
    }

    @GetMapping("/genre/{genre}")
    public List<Book> findByGenre(@PathVariable("genre") String genre) {
        return bookService.findByGenre(genre);
    }

    @GetMapping("/author/{author}")
    public List<Book> findByAuthor(@PathVariable("author") String author) {
        return bookService.findByAuthor(author);
    }

    @GetMapping("/readstatus/{status}")
    public List<Book> findByReadStatus(@PathVariable("status") String status) {
        return bookService.findByReadStatus(status);
    }
}
