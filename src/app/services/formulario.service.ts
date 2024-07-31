import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

interface Usuarios{
  nome:string
  email:string
  senha:string
}
@Injectable({// Seviço pode ser injetado em outros componentes
  providedIn: 'root'
})
export class FormularioService {
  private usuarios: Usuarios[] = [
    {"nome":"Davi","email":"davi1@gmail.com","senha":"12345"},
    {"nome":"João","email":"davi2@gmail.com","senha":"23456"},
    {"nome":"Alberto","email":"davi3@gmail.com","senha":"34567"},
    {"nome":"Ana","email":"davi4@gmail.com","senha":"45678"},
  ]

  constructor() {
    //Tentar obter os dados do localStorage
    const usuariosLocalStorageString = localStorage.getItem('usuarios');
    // Pegando item do localStorage em string
    const usuariosLocalStorage = usuariosLocalStorageString ? JSON.parse(usuariosLocalStorageString) : null;
    // Se usuarios... não for nulo, converter a variável com o usuarios em string em objetos!
    this.usuarios = usuariosLocalStorage || null;

    // Salvar os contatos no localStorage
    localStorage.setItem('usuarios',JSON.stringify(this.usuarios) )
    //falando a chave, e o objeto a ser transformado em string
   }
   obterUsuarios(){
    return this.usuarios;
   }

   salvarUsuarios(usuarios:Usuarios){
    this.usuarios.push(usuarios)
    //A função irá receber um objeto, e adicionará no array usuarios
    localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
    // Transformando o array em string e mandando para o localStorage 
   }
}
