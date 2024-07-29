import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CortesPage } from './cortes.page';

describe('CortesPage', () => {
  let component: CortesPage;
  let fixture: ComponentFixture<CortesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CortesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
