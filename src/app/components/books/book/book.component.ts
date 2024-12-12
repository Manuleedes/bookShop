import { Component, Input, OnInit} from '@angular/core';
import { Book } from '../../../types/Book';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-book',
  standalone: false,
  
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})

export class BookComponent implements OnInit{

 @Input() book: Book={} as Book
 isInCart=false
  constructor(private cartService: CartService){}
  ngOnInit(): void {
   
  }
  addToCart(){
    this.isInCart=true
    this.cartService.add(this.book)
  }
  remove(){
    this.isInCart=false
    this.cartService.remov(this.book)
  }
}