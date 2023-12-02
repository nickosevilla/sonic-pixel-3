import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercadoArticulosPage } from './mercado-articulos.page';

describe('MercadoArticulosPage', () => {
  let component: MercadoArticulosPage;
  let fixture: ComponentFixture<MercadoArticulosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MercadoArticulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
