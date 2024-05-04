package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.skilldistillery.eventtracker.entities.Book;
import com.skilldistillery.eventtracker.repositories.BooksRepository;

@Service
public class BookServiceImpl implements BookService{
	

	@Autowired
	private BooksRepository booksRepo;

	public BookServiceImpl(BooksRepository booksRepo) {
		this.booksRepo = booksRepo;
	}

	@Override
	public Book findById(int id) {
		return booksRepo.findById(id);
	}

	@Override
	public List<Book> findAll() {
		List<Book> books = booksRepo.findAll();
		return books;
	}

	@Override
	public Book create(Book book) {
		booksRepo.save(book);
		return book;
	}

	@Override
	public Book update(int id, Book book) {
		Book updatedBook = booksRepo.findById(id);
		updatedBook.setTitle(book.getTitle());
		updatedBook.setAuthor(book.getAuthor());
		updatedBook.setGenre(book.getGenre());
		updatedBook.setPublicationYear(book.getPublicationYear());
		updatedBook.setDescription(book.getDescription());
		updatedBook.setReadStatus(book.getReadStatus());
		updatedBook.setDateStarted(book.getDateStarted());
		updatedBook.setDateFinished(book.getDateFinished());
		updatedBook.setRating(book.getRating());
		booksRepo.save(updatedBook);
		return updatedBook;
	}

	@Override
	public void delete(int id) {
		booksRepo.deleteById(id);
	
	}

}
