import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuiasTutorialesPage } from './guias-tutoriales.page';

describe('GuiasTutorialesPage', () => {
  let component: GuiasTutorialesPage;
  let fixture: ComponentFixture<GuiasTutorialesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuiasTutorialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
