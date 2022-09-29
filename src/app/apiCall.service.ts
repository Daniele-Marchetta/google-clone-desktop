import { Observable, observable } from 'rxjs';
import { SearchUrl, apiKey, ImageUrl, videoUrl, NewsUrl } from './../environments/environment';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

constructor(private httpc :HttpClient) {}


headers : any = new HttpHeaders({
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'GB',
		'X-RapidAPI-Key':`${apiKey}`,
})

public Search(q:string){
  return this.httpc.get(SearchUrl+"q="+q,{headers:this.headers, observe:"response"})
}
public  Image(q:string){
  return  this.httpc.get(ImageUrl+"q="+q,{headers:this.headers, observe:"response"});
}
public Video(q:string){
  return this.httpc.get(videoUrl+"q="+q,{headers:this.headers, observe:"response"})
}
public News(q:string){
  return this.httpc.get(NewsUrl+"q="+q,{headers:this.headers, observe:"response"})
}

}
