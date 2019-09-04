import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Tache } from 'app/model/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private URLserveur:string='http://localhost:9090/gestionContentieux/taches/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.URLserveur).map(response => response);
  }

  public save(tache:Tache): Observable<any>{
    return this.httpClient.post(this.URLserveur,tache);
  }
}