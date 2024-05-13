package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Book;

public interface BookService {

	Book findById(int id);

	List<Book> findAll();

	Book create(Book book);

	Book update(int id, Book book);

	void delete(int id);

	List<Book> findByGenre(String genre);

	List<Book> findByAuthor(String author);

	List<Book> findByReadStatus(String status);

}
