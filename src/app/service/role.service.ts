import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  URLserveur:string='http://localhost:9090/roles/';

  constructor(private httpClient:HttpClient) { }

  public getAllRoles(): Observable<any>{
    return this.httpClient.get(this.URLserveur).map(response => response);
  }

  public getRole(id:number): Observable<any>{
    const req=new HttpRequest('GET', this.URLserveur+id)

    return this.httpClient.request(req);
    /*
    // Méthode plus courte :
    return this.httpClient.get(this.URLserveur+id);
    */
  }

  public saveRole(role:any): Observable<any>{
    return this.httpClient.post(this.URLserveur,role);
  }


  public deleteRole(id:number): Observable<any>{
    return this.httpClient.delete(this.URLserveur+id);
  }

  public updateRole(role:any): Observable<any>{
    var roleParse=JSON.parse(role);

    return this.httpClient.put(this.URLserveur+roleParse.idRole,roleParse);
  }
}
