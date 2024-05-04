package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Book;

public interface BooksRepository extends JpaRepository<Book, Integer>{

	Book findById(int id);
	
}
