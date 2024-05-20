export class Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  description: string;
  readStatus: string;
  dateStarted: string;
  dateFinished: string;
  rating: string;
  isEditable: any;

  constructor(
    id: number = 0,
    title: string = '',
    author: string = '',
    genre: string = '',
    publicationYear: number = 0,
    description: string = '',
    readStatus: string = '',
    dateStarted: string = '',
    dateFinished: string = '',
    rating: string = ''
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publicationYear = publicationYear;
    this.description = description;
    this.readStatus = readStatus;
    this.dateStarted = dateStarted;
    this.dateFinished = dateFinished;
    this.rating = rating;
  }
}
