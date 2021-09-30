import { TestBed } from '@angular/core/testing';

import { WizardStepService } from './wizard-step.service';

describe('WizardStepService', () => {
  let service: WizardStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
