import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmaduraPage } from './armadura.page';

describe('ArmaduraPage', () => {
  let component: ArmaduraPage;
  let fixture: ComponentFixture<ArmaduraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmaduraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
