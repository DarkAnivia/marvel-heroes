import { TestBed } from '@angular/core/testing';

import { HeroDetailGuardService } from './guard.service';

describe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroDetailGuardService = TestBed.get(HeroDetailGuardService);
    expect(service).toBeTruthy();
  });
});
