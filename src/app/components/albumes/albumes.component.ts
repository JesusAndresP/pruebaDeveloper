import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../../services/freeapi.service';
import { Albumes } from 'src/app/classes/albumes';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {

  constructor(private _freeApiService: FreeapiService) { }

  lstalbumes:Albumes[]=[]

  ngOnInit(): void {
    this._freeApiService.getAlbumes()
    .subscribe
    (
       data=> 
      {
        this.lstalbumes = data;
        
      }
    );
  }

}
