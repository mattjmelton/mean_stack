import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  pets: any;
  
  constructor(private _allpets: PetService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllPetsFromService();
  }
  getAllPetsFromService(){
    let obs = this._allpets.getAllPets();
    obs.subscribe(data => {
      console.log(" Getting pet data ", data);
      this.pets = data;
    })
  }

}
