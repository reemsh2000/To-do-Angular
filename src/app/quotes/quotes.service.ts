import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) {

  }
  getQuotes(){
   return this.http.get('https://api.quotable.io/random')
  }
}

