import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "books",
    loadChildren: "./books/books.module#BooksModule"
  },
  {
    path: "",
    redirectTo: "/books",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
