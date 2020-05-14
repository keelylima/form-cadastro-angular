import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  apiUrl = 'https://5ebdb510ec34e900161924dc.mockapi.io/api/users';

  

  constructor(private http: HttpClient) { }

  getUsers() {
      return this.http.get<any[]>(`${this.apiUrl}`);
  }

}
