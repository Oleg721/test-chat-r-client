import { Injectable } from '@angular/core';
import {UserLogin} from "../models/userLogin.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  testLogin(data: UserLogin){
    console.log(data);
    const options: any = {
          responseType: "text"
        }

    const body: any =  "someText";

    this.httpClient.post<string>("https://localhost:5001/t" ,body, options)
      .subscribe(e=> console.log(e), err => console.log(err));
  }

}
