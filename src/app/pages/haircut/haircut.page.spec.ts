import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HaircutPage } from './haircut.page';

describe('HaircutPage', () => {
  let component: HaircutPage;
  let fixture: ComponentFixture<HaircutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
