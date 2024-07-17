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

  async save(data: { companyName: string; barberName: string; address: string }): Promise<void> {
    const { companyName, barberName, address } = data;

    await this.storage.set('companyName', companyName);
    await this.storage.set('barberName', barberName);
    await this.storage.set('address', address);
  }


  async loadData(): Promise<{ companyName: string; barberName: string; address: string }> {
    const companyName = await this.storage.get('companyName');
    const barberName = await this.storage.get('barberName');
    const address = await this.storage.get('address');

    return { companyName, barberName, address };
  }

}
