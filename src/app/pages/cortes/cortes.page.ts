import { Component, OnInit } from '@angular/core';
import { AppStorageService } from 'src/app/services/app-storage.service';

@Component({
  selector: 'app-cortes',
  templateUrl: 'cortes.page.html',
  styleUrls: ['cortes.page.scss'],
})
export class CortesPage implements OnInit {

  haircutName: string = '';
  price: string = '';
  haircuts: { haircutName: string, price: string }[] = [];

  constructor(private appStorageService: AppStorageService) {}

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
  }

}
