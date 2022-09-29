import { ImageResults } from './../search';
import { async } from '@angular/core/testing';
import { GoogleService } from './../google.service';
import { ApiCallService } from './../apiCall.service';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  Output,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { SearchResults } from '../search';
import { ConstantPool } from '@angular/compiler';
import { Observable, observable } from 'rxjs';
import { googleLogoSearch } from '../settings';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css'],
})
export class NavbarSearchComponent implements OnInit  {
  constructor(
    private api: ApiCallService,
    public googleServ: GoogleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  GoogleImage: string = googleLogoSearch
  SearchValue: string = '';
  status: boolean = false;

  ngOnInit(): void {
    let path :string = this.route.snapshot.firstChild!.routeConfig!.path!.toString()
    this.googleServ.menu[this.googleServ.setActiveMenu(path)]
    this.route.queryParams.subscribe((param: any) => {
      console.log(param)
      if (param.q != undefined) {
        this.SearchValue=param.q
        this.searchResults(param.q);
      }else{
      }
    });
  }

  resetSearch() {
    this.SearchValue = '';
  }

  onClick() {
    if (this.SearchValue != '') {
      this.redirectTo('google/search/'+this.googleServ.menu[this.googleServ.activeMenu()].menuName)
    } else {
      return;
    }
  }

  saveResults(bodyRes: any) {
    //this.googleServ.risultati = [];
    this.googleServ.pushArray(bodyRes);
  }

  searchResults(q: any) {
    this.googleServ.loader = true;
    switch (this.googleServ.activeMenu()) {
      case 0:
        this.api.Search(this.SearchValue).subscribe((res:any) => {
          this.saveResults(res.body.results);
          this.googleServ.loader = false;
          this.googleServ.refreshResults.next(false);
        });
        break;
      case 1:
      this.api.Image(this.SearchValue).subscribe((res:any) => {
        this.saveResults(res.body.image_results);
        this.googleServ.loader = false;
        this.googleServ.refreshResults.next(false);
    })
    break;
    case 3:
      this.api.Search(this.SearchValue).subscribe((res:any) => {
        this.saveResults(res.body.results);
        this.googleServ.loader = false;
        this.googleServ.refreshResults.next(false);
      });
      break;
      case 2:
        this.api.News(this.SearchValue).subscribe((res:any) => {
          this.saveResults(res.body.entries);
          this.googleServ.loader = false;
          this.googleServ.refreshResults.next(false);
        });


  }
}

  changeMenu(event: any) {
    this.googleServ.resetMenu();
    this.googleServ.menu[event.target.id].menuValue = true;
    this.onClick();
  }


  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{queryParams: { q: this.SearchValue },}));
 }
}
