import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private URLserveur='http://localhost:9090/gestionContentieux/users/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.URLserveur).map(response => response);
  }

  public getOne(id:number): Observable<any>{
    return this.httpClient.get(this.URLserveur+id);
  }

  public save(user:any): Observable<any>{
    return this.httpClient.post(this.URLserveur,user);
  }

  public update(user:any): Observable<any>{
    return this.httpClient.put(this.URLserveur+JSON.parse(user).idUtilisateur,JSON.parse(user));
  }

  public activer(id:number): Observable<any>{
    var user=this.httpClient.get(this.URLserveur+id);
    var S:boolean=(<User><unknown>user).enabled;
    (<User><unknown>user).enabled=!S;

    return this.httpClient.put(this.URLserveur+id, user);
  }

  public rechercherParUsername(username:string): Observable<any>{
    return this.httpClient.get(this.URLserveur+'rechercher/'+username);
  }
}