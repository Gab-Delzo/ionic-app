import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfricaPage } from './africa.page';

describe('AfricaPage', () => {
  let component: AfricaPage;
  let fixture: ComponentFixture<AfricaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
