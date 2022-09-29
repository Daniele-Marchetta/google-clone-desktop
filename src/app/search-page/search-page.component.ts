import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { SearchResults } from './../search';
import { GoogleService } from './../google.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private googleServ:GoogleService) { }

  ngOnInit(): void {
  }


}
