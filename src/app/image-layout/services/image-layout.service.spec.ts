import { TestBed } from '@angular/core/testing';

import { ImageLayoutService } from './image-layout.service';

describe('ImageLayoutService', () => {
  let service: ImageLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
