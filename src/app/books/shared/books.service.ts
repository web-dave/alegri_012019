import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IBook } from "./custom-types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  restRoot = "http://localhost:4730/books/";

  constructor(private http: HttpClient) {}

  getBooks() {
    const url = this.restRoot;
    return this.http.get<IBook[]>(url);
  }
  getBook(isbn: string) {
    const url = this.restRoot + isbn;
    return this.http.get<IBook>(url);
  }
  updateBook(book: IBook): Observable<IBook> {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.patch<IBook>(url, book);
  }
}
