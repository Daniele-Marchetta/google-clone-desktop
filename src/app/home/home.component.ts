import { FormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleService } from './../google.service';
import { SearchResults } from './../search';
import { ApiCallService } from './../apiCall.service';
import { Component, OnInit } from '@angular/core';
import { googleLogoSearch } from 'src/environments/environment';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  GoogleImage :string= googleLogoSearch;

  form! : FormGroup;
  loader!:boolean;

  constructor(private apiCall:ApiCallService , private googleServ:GoogleService , private route :Router , public fb:FormBuilder, private arouter: ActivatedRoute,) {


    this.form=fb.group({
      'InputSearch' :['', Validators.required],
    })
  }

  ngOnInit() {
    this.loader=false
    };

  saveResults(body:any){
    this.googleServ.risultati=[];
    this.googleServ.pushArray(body.results);
  }


  onClick(){
    if(this.form.valid){
      this.loader=true;
      let valoreRicerca =this.form.get("InputSearch")?.value;
      this.route.navigate(['google/search/all'], {
        queryParams: { q: valoreRicerca },
      });
    }
  }
}
