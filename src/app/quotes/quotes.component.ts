import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quote$: any;
  constructor(private quotes: QuotesService) {
    this.quote$ = {
      content: '',
    };
  }

  ngOnInit(): void {
  this.getQuote()
  }

  getQuote(){
    this.quotes.getQuotes().subscribe((data) => {
      this.quote$ = data;
    });

  }
}
