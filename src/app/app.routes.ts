import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core'
import { NgModule } from '@angular/core';
import {MoviesComponent} from './movies/movies.component'
import {ShowDetailsComponent} from './show-details/show-details.component'

const routes: Routes = [
    { path: '', component: MoviesComponent},
    { path: 'movie/:id', component: ShowDetailsComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}