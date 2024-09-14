import { TestBed } from '@angular/core/testing';

import { LikeService } from './like.service';

describe('LikeService', () => {
  let service: LikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeService],
    });
    service = TestBed.inject(LikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
