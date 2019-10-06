import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})

export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
  }


  @Input() todo:Todo
  @ViewChild('txtInputFisico', null) txtInputFisico:ElementRef

  checkField:FormControl
  txtInput:FormControl
  editando:boolean


  editar(): void {
    this.editando = true
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1)
  }

  terminarEdicion(): void {
    this.editando = false
  }

}
