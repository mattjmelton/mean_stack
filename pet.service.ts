import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) { }

  //put all routes to the server here
  getAllPets(){
    return this._http.get("/api/pets");
  }
  createPet(data){
    return this._http.post("/api/pets", data);
  }
  deletePet(petID){
    console.log(petID);
    return this._http.delete("/api/pets/"+petID);
  }
  getOnePet(petID){
    return this._http.get("/api/pets/"+petID);
  }
  updatePet(petID, pet){
    return this._http.patch("/api/pets/"+petID,pet);
  }
  updatePetLikes(petID, pet){
    return this._http.patch("/api/pets/likes/"+petID,pet);
  }
}
