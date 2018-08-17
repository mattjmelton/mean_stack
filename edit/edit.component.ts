import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: any;
  errs: any;
  constructor(private _updatepet: PetService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    let obs = this._route.paramMap;
    obs.subscribe(params => this.getPet(params.get('id')));
    this.errs = [];
    this.pet = {name:"",
                animal:"",
                desc:"",
                likes:"",
                skill1:"",skill2:"",skill3:""}
  }
  getPet(id){
    let obs = this._updatepet.getOnePet(id);
    obs.subscribe(data => {
      this.pet = data;
    })
  }
  onSubmitUpdatePet(){
    let obs = this._updatepet.updatePet(this.pet._id,this.pet);
    console.log("In the onSubmitUpdatePet method",this.pet._id,this.pet);
    obs.subscribe(data => {
      if('errors' in data){
        this.errs = [];
        for(let i in data['errors']){
          this.errs.push(data['errors'][i]['message']);
        }
        console.log(this.errs);
      }
      else{
        this._router.navigate(['/pets/'+this.pet._id]);
      }
    })
  }

}
