import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MovieServiceService} from './service/movie-service.service'
import { HttpClientModule } from '@angular/common/http';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {AppRoutingModule} from './app.routes'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
