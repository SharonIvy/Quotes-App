import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() voteUp = new EventEmitter();
  @Output() voteDown = new EventEmitter();

  upVote(){
    this.voteUp.emit();
  }

  downVote() {
    this.voteDown.emit();
  }

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;

}
