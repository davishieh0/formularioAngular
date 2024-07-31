import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContainerComponent } from '../container/container.component';
import { RouterLink } from '@angular/router';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,ContainerComponent,RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  contatoForm!: FormGroup;

  constructor(private formularioService:FormularioService){

  }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      senha: new FormControl('',Validators.required),
    })
  }
  salvarContato() {
    const novoUsuario = this.contatoForm.value
    this.formularioService.salvarUsuarios(novoUsuario);
  }
}






