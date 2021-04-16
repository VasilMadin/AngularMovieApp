import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiKey = '8c5b905c57b8afb7a982085c9eafcf55'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService  {
  path:string = 'https://api.themoviedb.org/3/'
  popular:string = 'discover/movie?sort_by=popularity.desc'
  theatres:string ='discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  authentication:string = '&api_key='

    constructor(private http:HttpClient){}

  getPopular():Observable<Object>{
    return this.http.get(`${this.path}${this.popular}${this.authentication}${apiKey}`)
  }

  getTheatres():Observable<Object>{
    return this.http.get(`${this.path}${this.theatres}${this.authentication}${apiKey}`)
  }
}


