import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../service/movie-service.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular;
  theatres;
  dramas;
  searchResult:any;
  isSearched:boolean

  constructor(private movieService:MovieServiceService) { }

  
  search(myQuery){
    this.movieService.findMovie(myQuery.search).subscribe(data => {
      this.searchResult = data;
      this.isSearched = true;
    })
  }
  ngOnInit(): void {
    this.movieService.getPopular().subscribe(data => {
      this.popular = data;
    })

    this.movieService.getTheatres().subscribe(data => {
      this.theatres = data;
    })

    this.movieService.getDramas().subscribe(data => {
      this.dramas = data;
    })
  }

}
