import { TestBed } from '@angular/core/testing';
import { TransaccionServiceService } from './transaccion.service';



describe('TransaccionService', () => {
  let service: TransaccionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
