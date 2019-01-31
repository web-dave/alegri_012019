import { Component, OnInit } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { IBook } from "../shared/custom-types";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

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
    this.service
      .getBooks()
      // .pipe(
      //   map(a => {
      //     console.log(a);
      //     return a.body;
      //   })
      // )
      .subscribe(b => {
        // console.log(b);
        this.books = b;
      });
  }
  deleteBook(book: IBook) {
    this.service.deleteBook(book.isbn).subscribe(res => console.table(res));
  }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
