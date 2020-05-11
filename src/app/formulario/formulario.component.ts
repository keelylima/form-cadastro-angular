import { Component, OnInit } from '@angular/core';

import { FormularioService } from '../formulario.service';

import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  isForm: boolean = false;
  valorSalvo: string = '';

  faVenus = faVenus;
  faMars = faMars;


//   clickAdd() {
//     this.isForm = true;
//   }

//   salvarValor(valor) {
//     this.valorSalvo = valor;
//   }

cadastros: any = [
  {
    nome: 'Ana',
    datNasc: '10/02/2003',
    sexo: 'Feminino'
  },
  {
    nome: 'Julio',
    datNasc: '10/02/1992',
    sexo: 'Masculino'
  }
]

  onSubmit(form) {
    console.log(form.value)
  }

  addUser(user) {
    this.cadastros.push({ 
      nome: user.nome,
      datNasc: user.datNasc,
      sexo: user.sexo
    })
  }


  constructor() { }

  ngOnInit(): void {
    // this.getMovies();
  }

  // getMovies() {
  //   console.log(this.formularioService.getMovies());
        
  // }

}
