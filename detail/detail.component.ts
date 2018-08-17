import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pet: any;
  errs: any;
  petID: String;
  constructor(private _onepet: PetService,
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
    let obs = this._onepet.getOnePet(id);
    obs.subscribe(data => {
      this.pet = data;
    })
  }
  onClickDelete(petID: String){
    console.log("Deleting pet record");
    let obs = this._onepet.deletePet(petID);
    obs.subscribe(data =>{
      console.log("getting it done.",petID);
    })
    this._router.navigate(['/pets']);
  }
  onClickLike(petID: String, pet:any){
    console.log("updating like pet record");
    let obs = this._onepet.updatePet(petID,pet);
    obs.subscribe(data =>{
      console.log("getting it done.",petID,pet);
    })
    this._router.navigate(['/pets/'+petID]);
  }

}

