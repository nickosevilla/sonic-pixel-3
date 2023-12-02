import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventosTorneosPage } from './eventos-torneos.page';

describe('EventosTorneosPage', () => {
  let component: EventosTorneosPage;
  let fixture: ComponentFixture<EventosTorneosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventosTorneosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
