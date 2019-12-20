import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import {PresentationTheme} from "../models/PresentationTheme";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Credentials': 'true'
})
};

@Injectable({
  providedIn: 'root'
})
export class PresentationThemeServiceService {
  appUrl = 'http://localhost:1222/rest/presentationTheme/';
  constructor(private http: HttpClient) { }

  loadData(): Observable<any> {
    return this.http.get(this.appUrl, httpOptions).pipe();
  }

  addData(data: PresentationTheme): Observable<PresentationTheme>{
    return this.http.post<PresentationTheme>(this.appUrl, data, httpOptions);
  }

  updateData(data: PresentationTheme): Observable<PresentationTheme>{
    return this.http.put<PresentationTheme>(this.appUrl+"/"+data.id, data, httpOptions);
  }

  deleteData(data: PresentationTheme): Observable<any>{
    // return this.http.delete<any>(this.appUrl+"/"+data.id, httpOptions);
    return this.http.request('DELETE', this.appUrl+data.id);
    // (this.appUrl+"/"+data.id, httpOptions);
  }

}


