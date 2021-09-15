import { Component, OnInit } from '@angular/core';
import{Imagenes} from '../../classes/imagenes';
import { FreeapiService } from '../../services/freeapi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private _freeApiService: FreeapiService) { }

  lstImagenes:Imagenes[]=[]

  ngOnInit(): void {
    this._freeApiService.getUsuarios()
    .subscribe
    (
       data=> 
      {
        console.log(data);
        this.lstImagenes = data;
      }
    );
  }

}
