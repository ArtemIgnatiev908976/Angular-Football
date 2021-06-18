import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 teamName: string ="";
 response: any;

 constructor(private http: HttpClient) {
 }


// рабочий гет запрос
 search(){
   this.http.get('https://api.github.com/users/' + this.teamName)
     .subscribe((response)=>{
       this.response = response;
       console.log(this.response)
     })
 }
// рабочий гет запрос


}
