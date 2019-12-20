import { TestBed } from '@angular/core/testing';

import { PresentationServiceService } from './presentation-service.service';

describe('PresentationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentationServiceService = TestBed.get(PresentationServiceService);
    expect(service).toBeTruthy();
  });
});
