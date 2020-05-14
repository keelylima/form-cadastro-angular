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

  pesquisa: any;

  users: any[];

  addUser(user) {
      this.users.push({ 
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

  constructor(private formularioService: FormularioService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.formularioService.getUsers().subscribe(
      users => {
       this.users = users;
      }
    );
  }

}
