import { ComprasserviceService } from './../comprasservice.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-guardar-compras',
  templateUrl: './guardar-compras.page.html',
  styleUrls: ['./guardar-compras.page.scss'],
})
export class GuardarComprasPage implements OnInit {

  public archivedTodos = [];

  constructor(private service: ComprasserviceService, private alertCtrl: AlertController, public navCtrl: NavController) {

    this.archivedTodos = this.service.getArchivedTodos();
  }

  ionViewDidLoad() {
  this.archivedTodos = this.service.getArchivedTodos();
  }


  async deleteItem(item) {
    const alert = await this.alertCtrl.create({
      header: item === undefined ? 'Borrar Dato Compras' : 'Borrar Datos Compra',
      message: 'Estás Seguro?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
          {
          text: 'Si',
          handler: () => {
            this.archivedTodos.splice(item, 1);
            this.navCtrl.pop();
          }
        }
      ],
      inputs:[
        {
            type: 'radio',
            label: 'Compra Hecha...',
            value: 0,
            checked: true
        }
    ]

    });
    await alert.present();
  }








  ngOnInit() {
  }

}
