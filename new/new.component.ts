import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet: any;
  errs: any;
  constructor(private _newpet: PetService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.pet = {
      name:"",
      animal:"",
      desc:"",
      likes:"",
      skill1:"",skill2:"",skill3:""
    };
  }
  onSubmitCreatePet(){
    console.log(" sending pet data to server ");
    let obs = this._newpet.createPet(this.pet);
    obs.subscribe(data => {
      if('errors' in data){
        this.errs = [];
        for(let i in data['errors']){
          this.errs.push(data['errors'][i]['message']);}
      }
      else {
        this.pet = data;
        this._router.navigate(['pets']);
      }
    })
  }

}
