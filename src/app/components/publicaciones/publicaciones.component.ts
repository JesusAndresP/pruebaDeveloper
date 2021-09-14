import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../../services/freeapi.service';
import { Publicaciones } from '../../classes/publicaciones';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  constructor(private _freeApiService: FreeapiService, private formBuilder:FormBuilder) { }

  lstPublicaciones: Publicaciones[] = [];


  ngOnInit(): void {

    var post = new Publicaciones();
    post.body = 'testBody';
    post.title = 'testTitle';
    post.userID = 5;

    this._freeApiService.post(post).subscribe(
      data => {
        this.lstPublicaciones = data;

      }
    )

  }




}
