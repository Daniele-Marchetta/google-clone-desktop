import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPageComponent } from './search-page/search-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ImageSearchComponent } from './image-search/image-search.component';
import { SearchAllComponent } from './search-all/search-all.component';
import { VideoSearchComponent } from './video-search/video-search.component';
import { HoverDirective } from './hover.directive';
import { NewsSearchComponent } from './news-search/news-search.component';



@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      HomeComponent,
      NavbarSearchComponent,
      SearchPageComponent,
      ImageSearchComponent,
      SearchAllComponent,
      VideoSearchComponent,
      HoverDirective,
      NewsSearchComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
