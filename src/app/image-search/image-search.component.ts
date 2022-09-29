import { GoogleService } from './../google.service';
import { ImageResults } from './../search';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { SearchResults } from '../search';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  constructor(public googleServ : GoogleService ,private sanitizer: DomSanitizer) { }


  results!:Observable<ImageResults[]>


  ngOnInit(): void {
    this.googleServ.risultati=[]
    this.results=this.googleServ.refreshResults.pipe(switchMap(_=>this.googleServ.getResults()));
  }

  sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

}
