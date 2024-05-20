import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseUrl = 'http://localhost:8083/'; // adjust port to match server
  private url = this.baseUrl + 'api/books';

  constructor(private http: HttpClient) {}

  index(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BooksService.index(): error retrieving book: ' + err)
        );
      })
    );
  }

  create(newBook: Book): Observable<Book> {
    return this.http.post<Book>(this.url, newBook).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BooksService.index(): error retrieving book: ' + err)
        );
      })
    );
  }

  update(book: Book, id:number): Observable<Book> {
    return this.http.put<Book>(this.url + "/" + id, book).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('book.update(): error updating book: ' + err)
        );
      })
    );
  }


  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + "/" + id).pipe(
      // catchError((err: any) => {
      //   console.log(err);
      //   return throwError(new Error('Error deleting book: ' + err)); // Close the throwError properly
      // })
    );
  }

  findByGenre(genre : Book): Observable<Book[]>{
    return this.http.get<Book[]>(this.url + "/genre/" + genre).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BooksService.findByGenre(): error retrieving book: ' + err)
        );
      })
    )};

    findByAuthor(author : Book): Observable<Book[]>{
      return this.http.get<Book[]>(this.url + "/author/" + author).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error('BooksService.findByAuthor(): error retrieving book: ' + err)
          );
        })
      )};

      findByStatus(readStatus : Book): Observable<Book[]>{
        return this.http.get<Book[]>(this.url + "/readstatus/" + readStatus).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(
              () => new Error('BooksService.findByStatus(): error retrieving book: ' + err)
            );
          })
        )};
  
}