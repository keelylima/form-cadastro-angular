import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  apiUrl = 'src/data/formulario/formulario';

  

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {

    this.http.get(this.apiUrl).subscribe(
      n => console.log('n', n)
    )
  }

//   getMovie(id: string): Observable<any[]>{
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<any[]>(url)
//   }

}
