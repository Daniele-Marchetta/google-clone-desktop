import { NewsSearchComponent } from './news-search/news-search.component';
import { VideoSearchComponent } from './video-search/video-search.component';
import { SearchAllComponent } from './search-all/search-all.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"google", component:HomeComponent },
  {path:"google/search" , component: SearchPageComponent ,
  children : [{path:"images" , component : ImageSearchComponent} , {path:"all" , component : SearchAllComponent} ,
  {path:"videos" , component : VideoSearchComponent} , {path:"news" , component : NewsSearchComponent}]
},
{path:"" , redirectTo :"google" , pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
