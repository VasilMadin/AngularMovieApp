import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../service/movie-service.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular;
  theaters;

  constructor(private movieService:MovieServiceService) { }

  ngOnInit(): void {
    this.movieService.getPopular().subscribe(data => {
      this.popular = data;
    })

    this.movieService.getTheatres().subscribe(data => {
      this.theaters = data;
    })
  }

}
