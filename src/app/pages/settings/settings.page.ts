import { Component } from '@angular/core';
import { AppStorageService } from 'src/app/services/app-storage.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  companyName: string = '';
  barberName: string = '';
  address: string = '';

  constructor(private appStorageService: AppStorageService) {}

  async ngOnInit() {
    await this.loadCompanyData();
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
  
  async saveCompanyData() {
    const companyData = {
      companyName: this.companyName,
      barberName: this.barberName,
      address: this.address
    };

    try {
      await this.appStorageService.saveCompanyData(companyData);
    } catch (error) {
      console.error('An error occurred while saving the data:', error);
    }
  }
}
