import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote (1, 'Heavy is the head that wears the crown', 'William Shakespeare', 'kendi.sharon.ivy', new Date(2019, 6, 9), 0, 0),
    new Quote (2, 'My favourite exercise is between a lunge and a crunch - I call it lunch', 'Anonymous','rose_karimi', new Date(2018, 11, 30), 0, 0),
    new Quote (3, 'We make men without chests and expect from them virtue and enterprise [...] We laugh at honour and are shocked to find traitors in our midst', 'C. S. Lewis', '\n ethan.mutugi', new Date(2019, 8, 20), 0, 0),
    new Quote (4, 'Life is a crapshoot - it is also brief', 'Anonymous', '\n nevmuraya', new Date(2019, 7, 7), 0, 0),
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  upvoteIncrease(i: number){
    this.quotes[i].upvotes += 1;
    
  }

  downvoteIncrease(i: number) {
    this.quotes[i].downvotes += 1;

  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quote}?"`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
