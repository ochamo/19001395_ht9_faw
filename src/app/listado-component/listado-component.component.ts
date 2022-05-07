import { Component, OnInit } from '@angular/core';
import { PetListItemModel } from '../shared/models/petListItem.model';
import { ClientService } from '../shared/services/client.service';
import { MatTableDataSource } from '@angular/material/table';

import * as moment from 'moment';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.scss']
})
export class ListadoComponent implements OnInit {
  displayedColumns: String[] = ['name', 'breed', 'dateOfBirth'];
  dataSource = new MatTableDataSource<PetListItemModel>();
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getPets().subscribe(res => {
      let items = res.datos.map(it => {
        return new PetListItemModel(it.name, moment(it.dateOfBirth).format('DD/MM/YYYY'), it.breed);
      });
      this.dataSource.data = items;
    });
  }

  

}
