import { Component, OnInit } from '@angular/core';
import { PetListItemModel } from '../shared/models/petListItem.model';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.scss']
})
export class ListadoComponent implements OnInit {
  displayedColumns: String[] = ['name', 'breed', 'dateOfBirth'];
  dataSource: PetListItemModel[] = [
    new PetListItemModel('tomas', '11/11/2011', 'shanti')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
