import { Component, OnInit } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { IBook } from "../shared/custom-types";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(private service: BooksService) {}

  ngOnInit() {
    this.service.getBooks().subscribe(b => (this.books = b));
  }

  selectBook(data) {
    console.table(data);
  }
}
