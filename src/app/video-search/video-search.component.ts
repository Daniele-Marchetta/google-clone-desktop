import { SearchAllComponent } from './../search-all/search-all.component';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, switchMap } from 'rxjs';
import { GoogleService } from '../google.service';
import { ImageResults } from '../search';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {

  constructor(public googleServ : GoogleService ,private sanitizer: DomSanitizer) { }


  results!:Observable<any[]>
  //hover:boolean=false;


  ngOnInit(): void {
    this.googleServ.risultati=[]
    this.results=this.googleServ.refreshResults.pipe(switchMap(_=>this.googleServ.getResults()));
  }




}
