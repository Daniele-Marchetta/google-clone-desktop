import { Injectable } from '@angular/core';
import { of , Observable, BehaviorSubject} from 'rxjs';
import { SearchResults } from './search';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

constructor() { }

public risultati:any []= [];

public menu:any=[
  {menuName:"all" ,menuValue : true},
  {menuName:"images" ,menuValue : false},
  {menuName:"news" ,menuValue : false},
  {menuName:"videos" ,menuValue : false}
]

public loader:boolean=false;

public refreshResults = new BehaviorSubject<boolean>(true);

getResults():Observable<any[]>{
  return of(this.risultati);
}

pushArray(value:any){
  value.forEach((element:any) => {
    this.risultati.push(element);
  });
  console.log(this.risultati)
}


resetMenu(){
  this.menu.forEach((element:any) => {
    element.menuValue=false;
  });
}

activeMenu():number{
  let position! :number;
  this.menu.forEach((element:any,index:number) => {
    if(element.menuValue==true){
      position=index;
    }
  });
  return position;
}

setActiveMenu(menuName:string){
  this.resetMenu();
  let position! : number;
this.menu.forEach((element:any) => {
  if(element.menuName==menuName){
      element.menuValue=true;
  }
});
console.log(position)
return position;
}

}
