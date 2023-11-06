import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComputadoraPage } from './computadora.page';

describe('ComputadoraPage', () => {
  let component: ComputadoraPage;
  let fixture: ComponentFixture<ComputadoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComputadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
