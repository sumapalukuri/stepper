import { Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { StepModel } from '../../models/steps.model';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  currentStep: StepModel = {} as StepModel;
  currentStepSub!: Subscription;

  constructor(
    private stepsService: StepsService) { }

  ngOnInit(): void {
    this.currentStepSub = this.stepsService.currentStep$.subscribe((step: StepModel) => {
      this.currentStep = step;
    });
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  ngOnDestroy(): void {
    this.currentStepSub.unsubscribe();
  }

  onSubmit(): void {
  }

}
