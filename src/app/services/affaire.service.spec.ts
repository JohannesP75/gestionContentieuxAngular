import { TestBed } from '@angular/core/testing';

import { AffaireService } from './affaire.service';

describe('AffaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffaireService = TestBed.get(AffaireService);
    expect(service).toBeTruthy();
  });
});
