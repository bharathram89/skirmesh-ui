import { TestBed } from '@angular/core/testing';

import { NodeStatusService } from './node-status.service';

describe('NodeStatusService', () => {
  let service: NodeStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
