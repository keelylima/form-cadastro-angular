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

  cleanForm(formulario) {
    formulario.form.patchValue({
      nome: null,
      datNasc: null,
      sexo: null
    })
  }

  showForm() {
    this.isForm = true;
  }

  hideForm() {
    this.isForm = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
