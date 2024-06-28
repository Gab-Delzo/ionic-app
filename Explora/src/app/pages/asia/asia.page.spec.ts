import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsiaPage } from './asia.page';

describe('AsiaPage', () => {
  let component: AsiaPage;
  let fixture: ComponentFixture<AsiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
