import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {
  URLserver:string='http://localhost:9090/gestionContentieux/courts/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.URLserver).map(response => response);
  }

  public getOne(id:number): Observable<any>{
    return this.httpClient.get(this.URLserver+id).map(response => response);
  }
}
