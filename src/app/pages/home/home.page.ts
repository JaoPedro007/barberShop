import { Component } from '@angular/core';
import { AppStorageService } from 'src/app/services/app-storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id: number = 1;
  name: string = '';
  datetime: string = '';
  service: string = '';
  clients: {id: number, name: string, datetime: string, service: string}[] = [];
  haircuts: { haircutName: string, price: string }[] = [];

  companyName: string = '';
  barberName: string = '';
  address: string = '';

  constructor(private appStorageService: AppStorageService, private alertController: AlertController) { }

  async ngOnInit() {
    await this.loadClientData();
    await this.loadCompanyData();
    await this.loadHaircutData();

  }

  async loadHaircutData() {
    try {
      this.haircuts = await this.appStorageService.loadHaircutData();
    } catch (error) {
      console.error('An error occurred while loading the haircut data', error);
    }
  }

  async saveSchedule() {
    if (this.name.length != 0 && this.datetime.length != 0 && this.service.length != 0) {
      const newSchedule = {
        id: this.id,
        name: this.name,
        datetime: this.datetime,
        service: this.service
      };
      this.clients.push(newSchedule);
  
      try {
        await this.appStorageService.saveClient(this.clients);
        console.log("Customer saved successfully");
      } catch (error) {
        console.error('An error occurred by saving a new customer', error);
      }
    } else {
      console.log(this.name);
      console.log(this.datetime);
      console.log(this.service);
      this.showAlert("Fill in all data");
    }
  }
  

  async removeClient(client: {id: number, name: string, datetime: string, service: string}){
    this.clients.splice(this.clients.indexOf(client), 1);
    try {
      await this.appStorageService.saveClient(this.clients);
    } catch (error) {
      console.error('An error occurred by saving a new customer', error);
    }
  }

  async loadClientData() {
    try {
      this.clients = await this.appStorageService.loadClientsData();
    } catch (error) {
      console.error('Error loading customer data', error);
    }
  }

  async loadCompanyData() {
    try {
      const data = await this.appStorageService.loadCompanyData();
      this.companyName = data.companyName || '';
      this.barberName = data.barberName || '';
      this.address = data.address || '';
    } catch (error) {
      console.error('An error occurred while loading the data', error);
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
