import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksModule } from "./components/books/books.module";
import { CartComponent } from "./components/cart/cart.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./components/auth/auth.module";

@NgModule({
  declarations:[AppComponent,
    CartComponent
  ],
  imports:[BrowserModule,BooksModule,AppRoutingModule,AuthModule],
  bootstrap:[AppComponent],
})
export class AppModule{}

