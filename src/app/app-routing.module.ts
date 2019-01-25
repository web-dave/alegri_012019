import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PreloadDelayed } from "./shared/preload-delayed";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "books",
    loadChildren: "./books/books.module#BooksModule",
    data: {
      preload: true,
      delay: 4000
    }
  },
  {
    path: "",
    redirectTo: "/books",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadDelayed
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
