import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[];
  user:User=new User();
  searchText:string;
  
  constructor(private userService: UtilisateurService, private appService:AppService) { }

  ngOnInit() {
    this.locadUser();
  }

  locadUser(){
    this.userService.getAll().subscribe(
      data=>{this.users=data;},
      error=>{console.log(error);}
    );
  }

}
