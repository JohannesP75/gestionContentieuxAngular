import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from 'app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URLserveur:string='http://localhost:9090/gestionContentieux/users/';

  constructor(private httpClient:HttpClient) { }

  public getAllUtilisateurs(): Observable<any>{
    return this.httpClient.get(this.URLserveur).map(response => response);
  }

  public getUtilisateur(id:number): Observable<any>{
    return this.httpClient.get(this.URLserveur+id);
  }

  public saveUtilisateur(user:any): Observable<any>{
    return this.httpClient.post(this.URLserveur,user);
  }

  /* public saveUserAvecImg(file:File, user:User): Observable<any>{
    const formData:FormData=new FormData();
    formData.append('nom', user.nomUtilisateur);
    formData.append('prenom', user.prenomUtilisateur);
    formData.append('username', user.username);
    formData.append('password', user.password);
    formData.append('file', file);
    var dateN=JSON.stringify(user.dateNaissance);
    formData.append('dateNaissance', dateN);
    const req=new HttpRequest('POST', this.URLserveur, formData, {reportProgress: true, responseType: 'text'});

    return this.httpClient.request(req);
  } */

  public deleteUtilisateur(id:number): Observable<any>{
    return this.httpClient.delete(this.URLserveur+id);
  }

  public updateUtilisateur(user:any): Observable<any>{
    var userParse=JSON.parse(user);

    return this.httpClient.put(this.URLserveur+userParse.idUtilisateur,userParse);
  }
}
