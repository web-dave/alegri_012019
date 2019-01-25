import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './shared/pages.pipe';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookPreviewComponent, BookDetailsComponent, PagesPipe],
  imports: [CommonModule, BooksRoutingModule],
  exports: [BooksComponent],
  providers: []
})
export class BooksModule {}
