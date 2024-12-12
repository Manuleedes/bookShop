import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:'Java Programming',
        author:'James Gosling',
        amount: 740
      
      },
      {
  
        name:'Spring boot',
        author:'Lidigu Emmanuel',
        amount: 1100
      },
      {
        name:'Docker Hub',
        author:'Lidigu Emmanuel',
        amount:3400
      }
    ]
  }
}
