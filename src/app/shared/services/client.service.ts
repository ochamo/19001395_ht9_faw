import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pet } from '../models/pet.model';
import { PetResponse } from '../models/petResponse.model';

const httpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  createPet(pet: Pet) {
    return this.httpClient.post(environment.apiBackend + '/mascota', httpOptions);
  }

  getPets() {
    return this.httpClient.get<PetResponse>(environment + 'mascota', httpOptions);
  }

}
