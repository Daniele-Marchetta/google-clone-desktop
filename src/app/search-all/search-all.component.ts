import { SearchResults } from './../search';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GoogleService } from '../google.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent implements OnInit {

  results!:Observable<any[]>

  constructor(public googleServ:GoogleService) { }

  ngOnInit(): void {
    this.googleServ.risultati=[]
     this.results=this.googleServ.refreshResults.pipe(switchMap(_=>this.googleServ.getResults()));
  }

}
