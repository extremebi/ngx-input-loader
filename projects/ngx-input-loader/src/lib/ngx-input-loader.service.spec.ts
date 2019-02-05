import { TestBed } from '@angular/core/testing';

import { NgxInputLoaderService } from './ngx-input-loader.service';

describe('NgxInputLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxInputLoaderService = TestBed.get(NgxInputLoaderService);
    expect(service).toBeTruthy();
  });
});
