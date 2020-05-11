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

  // movies: Array<any>; //funciona sem (?)


  // novoCadastro: any = {
  //   nome: '',
  // }



  //mock cadastros
//   cadastros: any = [
//     {
//       nome: 'João',
//       datNasc: '14/02/2002',
//       sexo: 'Masculino'

//    },
//    {
//       nome: 'Maria Isabel',
//       datNasc: '20/09/1988',
//       sexo: 'Feminino'
//   },
//   {
//       nome: 'Fernanda Lima',
//       datNasc: '04/12/1995',
//       sexo: 'Feminino'
//   },
//   {
//     nome: 'Marco Aurélio',
//     datNasc: '17/03/1985',
//     sexo: 'Masculino'
// }
// ]

// pushCadastro(){
//   if (this.novoCadastro != "") {
//     console.log(this.cadastros.push(
//       { 
//         nome: this.novoCadastro, 
//         sexo: this.novoCadastro
//       }
//       ));
    
//     // this.newPessoa = ""; //limpar campo
//   }
// }


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

novoCadastro = {
  nome: '',
}


  onSubmit(form) {
    console.log(form.value)
  }

  addUser(user) {
    this.cadastros.push({ 
      nome: user.nome,
      datNasc: user.datNasc,
      sexo: user.sexo
    })
    console.log(this.cadastros)
  }


  constructor() { }

  ngOnInit(): void {
    // this.getMovies();
  }

  // getMovies() {
  //   console.log(this.formularioService.getMovies());
        
  // }

}
