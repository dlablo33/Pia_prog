import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizarronPage } from './pizarron.page';

describe('PizarronPage', () => {
  let component: PizarronPage;
  let fixture: ComponentFixture<PizarronPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PizarronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
