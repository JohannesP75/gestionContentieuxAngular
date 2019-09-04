import { Component, OnInit } from '@angular/core';
import { Affaire } from 'app/model/affaire';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AffaireService } from 'app/services/affaire.service';
import { Router } from '@angular/router';
import { error } from 'util';
import { User } from 'app/model/user';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.scss']
})
export class AffaireComponent implements OnInit {
  affaires:any[];
  affaire: Affaire = new Affaire();
  //myForm: FormGroup;

  constructor(/* private formBuilder: FormBuilder,  */private affaireService: AffaireService, private router: Router) { }

  ngOnInit() {
    this.locadAffaire();
    /* this.myForm = this.formBuilder.group(
      {
        //idAForm: ['', Validators.required],
        statutAForm: ['', Validators.required],
        titreAForm: ['', Validators.required],
        descAForm: ['', Validators.required],
        refAForm: ['', Validators.required]
      } 
    );*/
  }

  locadAffaire() {
      this.affaireService.getAll().subscribe(
        data => {this.affaires = data;},
        error => {console.log(error);}
    );
  }

  findAffaire(id:number){
    this.affaireService.getOne(id).subscribe(
      data=>{this.affaire=data;},
      error=>{console.log(error);}
    );
  }

  saveAffaire(){
    this.affaireService.save(this.affaire).subscribe(
      ()=>{
        this.locadAffaire();
        this.affaire=new Affaire();
      },
      error=>{
        console.log(error);
      }
    );
  }

  findAffaireByStatut(statut:number){
    this.affaireService.getAllByStatus(statut).subscribe(
      data => {this.affaires = data;},
      error => {console.log(error);}
    );
  }
}
