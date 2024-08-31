import { Component } from '@angular/core';
import { AppStorageService } from 'src/app/services/app-storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today: string = '';
  id: number = Date.now();
  name: string = '';
  selectedDateTime: string = '';
  selectedServices: string[] = [];
  clients: {id: number, name: string, datetime: string, service: string}[] = [];
  haircuts: { haircutName: string, price: string }[] = [];

  companyName: string = '';
  barberName: string = '';
  address: string = '';

  constructor(private appStorageService: AppStorageService, private alertController: AlertController) { }

  async ngOnInit() {
    this.today = new Date().toISOString();
    // this.selectedDateTime = this.today;
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

  async onDateTimeChange(event: any) {
    this.selectedDateTime = event.detail.value;
  }


  async saveSchedule() {
    if(this.name.trim() == ''){
      this.showAlert('Preencha um nome!');
      console.log(this.name);
      console.log(this.selectedDateTime);
      console.log(this.selectedServices);
      return;
    }

    if(this.selectedDateTime.length == 0){
      this.showAlert('Informe uma data e Hora!');
      console.log(this.name);
      console.log(this.selectedDateTime);
      console.log(this.selectedServices);
      return;
    }
    
    if(this.selectedServices.length == 0){
      this.showAlert('Selecione pelo menos um Serviço!');
      console.log(this.name);
      console.log(this.selectedDateTime);
      console.log(this.selectedServices);
      return;
    }
    
    if (this.name.length !== 0 && this.selectedDateTime.length !== 0 && this.selectedServices.length !== 0) {
      const schedule = {
        id: this.id,
        name: this.name,
        datetime: this.selectedDateTime,
        service: this.selectedServices.join(', ') // converte o array em uma string separada por vírgulas
      };
      this.clients.push(schedule);

    // clear screen data
    this.name = '';
    this.selectedDateTime = '';
    this.selectedServices = [];

      try {
        await this.appStorageService.saveClient(this.clients);
        console.log("Customer saved successfully");
      } catch (error) {
        console.error('An error occurred while saving a new customer', error);
      }
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
