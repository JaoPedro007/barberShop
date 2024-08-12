import { Component } from '@angular/core';
import { AppStorageService } from 'src/app/services/app-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id: number = 1;
  name: string = '';
  dateTime: string = '';
  service: string = '';
  clients: {id: number, name: string, dateTime: string, service: string}[] = [];

  companyName: string = '';
  barberName: string = '';
  address: string = '';

  constructor(private appStorageService: AppStorageService) { }

  async ngOnInit() {
    await this.loadClientData();
    await this.loadCompanyData();
  }

  async saveClient(){
    const newClient = {
      id: this.id,
      name: this.name,
      dateTime: this.dateTime,
      service: this.service
    };

    this.clients.push(newClient);

    try {
      await this.appStorageService.saveClient(this.clients);
    } catch (error) {
      console.error('Ocorreu um erro ao salvar um novo cliente', error);
    }
  }

  async removeClient(client: {id: number, name: string, dateTime: string, service: string}){
    this.clients.splice(this.clients.indexOf(client), 1);
    try {
      await this.appStorageService.saveClient(this.clients);
    } catch (error) {
      console.error('Ocorreu um erro ao salvar um novo cliente', error);
    }
  }

  async loadClientData() {
    try {
      this.clients = await this.appStorageService.loadClientsData();
    } catch (error) {
      console.error('Erro ao carregar dados dos clientes', error);
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
}
