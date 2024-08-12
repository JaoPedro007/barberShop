import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async saveCompanyData(data: { companyName: string; barberName: string; address: string }): Promise<void> {
    const { companyName, barberName, address } = data;

    await this.storage.set('companyName', companyName);
    await this.storage.set('barberName', barberName);
    await this.storage.set('address', address);
  }


  async loadCompanyData(): Promise<{ companyName: string; barberName: string; address: string }> {
    const companyName = await this.storage.get('companyName');
    const barberName = await this.storage.get('barberName');
    const address = await this.storage.get('address');

    return { companyName, barberName, address };
  }

  async saveHaircutData(haircuts: { haircutName: string; price: string }[]): Promise<void> {
    try {
      await this.storage.set('haircuts', haircuts);
    } catch (error) {
      console.error('An error occurred while saving data:', error);
    }
  }

  async loadHaircutData(): Promise<{ haircutName: string; price: string }[]> {
    try {
      const data = await this.storage.get('haircuts');
      return data || []; // Retorna um array vazio se não houver dados
    } catch (error) {
      console.error('An error occurred while loading data:', error);
      return []; // Retorna um array vazio em caso de erro
    }
  }

  async saveClient(clients: {id: number, name: string, dateTime: string,  service: string}[]): Promise<void>{
    try {
      await this.storage.set('clients', clients);
    } catch (error) {
      console.error('Erro ao savar dados do cliente.', error);
    }
  }

  async loadClientsData(): Promise<{id: number, name: string, dateTime: string,  service: string}[]> {
    try {
      const data = await this.storage.get('clients');
      return data || [];
    } catch (error) {
      console.error('Erro ao consultar dados dos clientes:', error);
      return [];
    }
  }
}
