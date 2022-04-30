import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingreso-component',
  templateUrl: './ingreso-component.component.html',
  styleUrls: ['./ingreso-component.component.scss']
})
export class IngresoComponent implements OnInit {

  registerForm= new FormGroup({
    name: new FormControl(''),
    breed: new FormControl(''),
    dateOfBirth: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.registerForm.value);
  }

}
