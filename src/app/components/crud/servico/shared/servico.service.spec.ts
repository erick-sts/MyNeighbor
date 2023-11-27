import { TestBed } from '@angular/core/testing';

import { ServicoService } from './servico.service';

describe('ServiceService', () => {
  let service: ServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
