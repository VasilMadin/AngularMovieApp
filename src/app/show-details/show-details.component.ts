import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieServiceService} from '../service/movie-service.service'
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  myMovie;
  constructor(private route:ActivatedRoute, private movieService:MovieServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id']
      this.movieService.getId(id).subscribe(selectedMovie => {
          this.myMovie = selectedMovie;
      })
    })
  }

}
