import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GoogleService } from '../google.service';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {

  results!:Observable<any[]>

  constructor(public googleServ:GoogleService) { }

  ngOnInit(): void {
    this.googleServ.risultati=[]
     this.results=this.googleServ.refreshResults.pipe(switchMap(_=>this.googleServ.getResults()));
  }


}
