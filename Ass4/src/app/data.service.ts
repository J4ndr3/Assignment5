import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import {fromEvent} from 'rxjs';
import {map, filter, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get('http://localhost:31407/api/Jandre/getProducts').pipe(map(result =>result))
  }
  sendDetails(ID,Des) {
   
    return this.http.get('http://localhost:31407/api/Jandre/addProduct/?P_CODE='+ID+'&P_DESCRIPT='+Des);
  }
}
 