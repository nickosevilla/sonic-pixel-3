import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentralNoticiasPage } from './central-noticias.page';

describe('CentralNoticiasPage', () => {
  let component: CentralNoticiasPage;
  let fixture: ComponentFixture<CentralNoticiasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CentralNoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
