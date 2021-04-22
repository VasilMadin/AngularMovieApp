import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from '../models/movie'

const apiKey = '8c5b905c57b8afb7a982085c9eafcf55'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService  {
  path:string = 'https://api.themoviedb.org/3/'
  popular:string = 'discover/movie?sort_by=popularity.desc'
  theatres:string ='discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  dramas:string  = "discover/movie?with_genres=18&primary_release_year=2014"
  authentication:string = '&api_key='
  movie:string = 'movie/'
  movieAuth:string = '?api_key='

    constructor(private http:HttpClient){}

    
    getPopular():Observable<Movie>{
      return this.http.get<Movie>(`${this.path}${this.popular}${this.authentication}${apiKey}`)
    }
    
    getTheatres():Observable<Movie>{
      return this.http.get<Movie>(`${this.path}${this.theatres}${this.authentication}${apiKey}`)
    }
    
    getDramas():Observable<Movie> {
      return this.http.get<Movie>(`${this.path}${this.dramas}${this.authentication}${apiKey}`)
    }
    
    getId(id){
      return this.http.get(`${this.path}${this.movie}`+ id + `${this.movieAuth}${apiKey}`)
    }

    findMovie(myQuery){
      return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${myQuery}&api_key=${apiKey}`)
    }
}


