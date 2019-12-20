import { TestBed } from '@angular/core/testing';

import { PresentationThemeServiceService } from './presentation-theme-service.service';

describe('PresentationThemeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentationThemeServiceService = TestBed.get(PresentationThemeServiceService);
    expect(service).toBeTruthy();
  });
});
