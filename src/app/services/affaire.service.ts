import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {
  private URLserveur:string='http://localhost:9090/gestionContentieux/cases/'

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.URLserveur).map(response => response);
  }

  public getOne(id:number): Observable<any>{
    return this.httpClient.get(this.URLserveur+id);
  }

  public save(affaire:any): Observable<any>{
    return this.httpClient.post(this.URLserveur,affaire);
  }

  public getAllByStatus(status:number): Observable<any>{
    return this.httpClient.get(this.URLserveur+'statut/'+status).map(response => response);
  }
}
