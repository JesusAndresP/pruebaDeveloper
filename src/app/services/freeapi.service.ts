import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Publicaciones } from '../classes/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
  constructor(private httpClient: HttpClient) { }
  getUsuarios(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")

  }
  getAlbumes(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/albums")

  }
  getImagenes(): Observable<any> {
    return this.httpClient.get("https://picsum.photos/v2/list?page=2")

  }

 

  post(post:Publicaciones):Observable<any>{
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts",post)

  }

}
