import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pet } from '../shared/models/pet.model';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-ingreso-component',
  templateUrl: './ingreso-component.component.html',
  styleUrls: ['./ingreso-component.component.scss']
})
export class IngresoComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    breed: new FormControl(''),
    dateOfBirth: new FormControl('')
  });

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
  }

  private reinitForm() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      breed: new FormControl(''),
      dateOfBirth: new FormControl('')
    });
  }

  public onSubmit() {
    let pet = new Pet(this.registerForm.get('name')?.value, this.registerForm.get('dateOfBirth')?.value, this.registerForm.get('breed')?.value);
    this.clientService.createPet(pet).subscribe(
      res => {
        this.reinitForm();
      }
    )
  }

}
