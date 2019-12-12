import { ComprasserviceService } from './../comprasservice.service';
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    compras = [];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private service: ComprasserviceService) {

    this.compras = this.service.getCompras();

  }

  archivedTodo(todoIndex) {
      this.service.archivedTodo(todoIndex);
  }

  goToGuardarCompras() {
    this.navCtrl.navigateForward('/guardar-compras');
  }


  async openAlert() {
    const addTodoAlert = await this.alertCtrl.create({
      header: 'Add a Lista Compras',
      message: 'Escriba su compra',
      inputs: [
        {
          type: 'text',
          name: 'addTodoInput'
        }
      ],
        buttons: [
          {
         text: 'Cancel'
          },
          {
            text: 'Add Compras',
            handler: (inputData) => {
              let todoText;
              todoText = inputData.addTodoInput;
              this.service.addCompras(todoText);
            }
          }]

    });
    await addTodoAlert.present();
  }


  async editAlert(todoIndex) {
    const editTodoAlert = await this.alertCtrl.create({
      header: 'Editar Lista Compras',
      message: 'Edite su compra',
      inputs: [
        {
          type: 'text',
          name: 'editCompraInput',
          value: this.compras[todoIndex]
        }
      ],
        buttons: [
          {
         text: 'Cancel'
          },
          {
            text: 'Edit Compras',
            handler: (inputData) => {
              let todoText;
              todoText = inputData.editCompraInput;
              this.service.editTodo(todoText, todoIndex);
            }
          }]

    });
    await editTodoAlert.present();
  }





}
