package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Book;

public interface BooksRepository extends JpaRepository<Book, Integer>{

	Book findById(int id);
	
	List<Book> findByGenre(String genre);

	List<Book> findByAuthor(String author);

	List<Book> findByReadStatus(String status);
	
}
