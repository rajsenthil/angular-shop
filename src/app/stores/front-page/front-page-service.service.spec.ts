import { TestBed } from '@angular/core/testing';

import { FrontPageServiceService } from './front-page-service.service';

describe('FrontPageServiceService', () => {
  let service: FrontPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
