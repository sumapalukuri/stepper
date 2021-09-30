import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTabsComponent } from './wizard-tabs.component';

describe('WizardTabsComponent', () => {
  let component: WizardTabsComponent;
  let fixture: ComponentFixture<WizardTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
