import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasserviceService {

  compras = [];
  archivedTodos = [];

  constructor() { }


  editTodo(compras, todoIndex) {
    this.compras[todoIndex] = compras;
  }

  addCompras(todoText){
    this.compras.push(todoText);
  }

  getCompras(){
    return this.compras;
  }

  getArchivedTodos() {
    return this.archivedTodos;
  }

  archivedTodo(todoIndex) {
    const todoBeArchived = this.compras[todoIndex];
    this.compras.splice(todoIndex, 1);
    this.archivedTodos.push(todoBeArchived);

  }




}
