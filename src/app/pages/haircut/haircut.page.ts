import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AppStorageService } from 'src/app/services/app-storage.service';
@Component({
  selector: 'app-haircut',
  templateUrl: 'haircut.page.html',
  styleUrls: ['haircut.page.scss'],
})
export class HaircutPage implements OnInit {

  haircutName: string = '';
  price: string = '';
  haircuts: { haircutName: string, price: string }[] = [];

  constructor(private appStorageService: AppStorageService, private alertController : AlertController) {}

  async ngOnInit() {
    await this.loadHaircutData();
  }

  async loadHaircutData() {
    try {
      this.haircuts = await this.appStorageService.loadHaircutData();
    } catch (error) {
      console.error('An error occurred while loading the haircut data', error);
    }
  }

  async saveHaircutData() {
    if(this.haircutName.length == 0){
      this.showAlert("Informe o nome do corte!");
      return;
    }
    
    if(this.price.length == 0){
      this.showAlert("Informe o valor do corte!");
      return;
    }
    
    if(this.haircutName.length != 0 && this.price.length !=0 ){
      const newHaircut = {
        haircutName: this.haircutName,
        price: this.price
      };
      this.haircuts.push(newHaircut);
      try {
        await this.appStorageService.saveHaircutData(this.haircuts); 
      } catch (error) {
        console.error('An error occurred while saving the haircut data:', error);
      }

      this.haircutName = '';
      this.price = '';
    }
    else{
      this.showAlert("Fill all data");
    }
  }

  async removeHaircut(haircut: {haircutName: string, price: string}){
    this.haircuts.splice(this.haircuts.indexOf(haircut), 1);
    try {
      await this.appStorageService.saveHaircutData(this.haircuts);
    } catch (error) {
      console.error('An error occurred by saving a new haircut', error);
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Attention',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
