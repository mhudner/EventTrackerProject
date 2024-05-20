import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {

  title: string = 'ngBooks';
  selectedBook: Book | null = null;
  bookList: Book[] = [];
  newBook: Book = new Book();
  editBook: Book | null = null;
  authors: Book[] = []; 

  //CONSTRUCTOR
  constructor(private booksService: BooksService) {}

  //LIFECYCLE HOOK
  ngOnInit(): void {
    this.reload();
  }

  //METHODS
  loadBooks(): void {
    this.booksService.index().subscribe({
      next: (bookList) => {
        this.bookList = bookList;
        
      },
      error: (err) => {
        console.log('Error' + err);
      },
    });
  }

  reload() {
    this.booksService.index().subscribe({
      next: (dbBooks: Book[]) => {
        console.log(dbBooks)
        this.bookList = dbBooks
      },
      error: (err) => {
        console.log("something went wrong with reload()")
      }
    })
  }

  addBook(book : Book) {
    this.booksService.create(book).subscribe({
      next: (book) => {
        this.reload();
        this.newBook = new Book();
        
      },
      error: (err) => {
        console.error('Error occurred while adding book:', err);
      },
    });
  }

  updateBook(book: Book){
      this.booksService.update(book, book.id).subscribe({
        next: (book) => {
          this.reload();
          this.selectedBook = null;
          this.editBook = null;
        },
        error: (err) => {
          console.error('Error updating book:', err);
        },
      });
    }

  setEditBook() {
    this.editBook = Object.assign({}, this.selectedBook);
  }

  deleteBook(id: number) {
      this.booksService.delete(id).subscribe({
        next: () => {
          this.reload();
        },
        error: (err) => {
          console.error('Error deleting book:', err);
        },
      });
    
  }

  displayBook(book: Book) {
    this.selectedBook = book;
  }

  goBack() {
    this.selectedBook = null;
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  findByGenre(genres: Book) {
    this.booksService.findByGenre(genres).subscribe({
        next: () => {
          this.reload();
        },
        error: (err) => {
          console.error('Error deleting book:', err);
        },
      });
    
  }
  findByAuthor(authors: Book) {
    this.booksService.findByAuthor(authors).subscribe({
      next: (dbBooks: Book[]) => {
        console.log(dbBooks)
        this.bookList = dbBooks;
      },
        error: (err) => {
          console.error('Error deleting book:', err);
        },
      });
    
  }
  findByStaturs(readStatus: Book) {
    this.booksService.findByStatus(readStatus).subscribe({
        next: () => {
          this.reload();
        },
        error: (err) => {
          console.error('Error deleting book:', err);
        },
      });
    
  }
}
