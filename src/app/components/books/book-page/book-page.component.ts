import { Component } from '@angular/core';
import { BookService } from 'src/app/common/book-service.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  books: any;
  book: any;
  constructor(private bookService: BookService){
    this.getAllBooks()
  }

  getAllBooks(){
    this.bookService.getBooks().subscribe((books: any) => {
      this.books = books;
    })
  }

  createBook(){
    this.bookService.addBook(this.book).subscribe((book: any) => {
      this.getAllBooks();
    })
  }
}
