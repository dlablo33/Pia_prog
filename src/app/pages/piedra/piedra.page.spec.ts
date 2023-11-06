import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiedraPage } from './piedra.page';

describe('PiedraPage', () => {
  let component: PiedraPage;
  let fixture: ComponentFixture<PiedraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PiedraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
