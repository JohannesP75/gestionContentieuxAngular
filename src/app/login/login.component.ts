import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials={username:'', password:''};

  constructor(private appService:AppService, private httpCLient:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.appService.authenticate(this.credentials, ()=>{this.router.navigateByUrl('/users');});

    return false;
  }
}