import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTransaccionesComponent } from './ver-transacciones.component';

describe('VerTransaccionesComponent', () => {
  let component: VerTransaccionesComponent;
  let fixture: ComponentFixture<VerTransaccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerTransaccionesComponent]
    });
    fixture = TestBed.createComponent(VerTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
