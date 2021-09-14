import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FreeapiService } from '../../services/freeapi.service';
import { Usuarios } from '../../classes/usuarios';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

 


  constructor(private _freeApiService: FreeapiService) {
    

  }
  lstusuarios: Usuarios[] = [];
  

  
  ngOnInit(): void {
    this._freeApiService.getUsuarios()
    .subscribe
    (
       data=> 
      {
        console.log(data);
        this.lstusuarios = data;
      }
    );
  }
  applyFilter(event: Event) {
    
const filterValue = (event.target as HTMLInputElement).value;

  }
  
}