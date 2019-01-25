import { Component, OnInit } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { IBook } from "../shared/custom-types";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getBooks().subscribe(b => (this.books = b));
  }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
