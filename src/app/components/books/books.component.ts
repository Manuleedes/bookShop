import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  standalone: false,
  
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{
  constructor(private booksService: BooksService){
    
  }

  books:Book[]=[]
  
  isShowing=true

  
  ngOnInit(): void {
    this.books= this.booksService.getBooks()
  }

}