import { TestBed } from '@angular/core/testing';

import { CustomerPanelService } from './customer-panel.service';

describe('CustomerPanelService', () => {
  let service: CustomerPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
