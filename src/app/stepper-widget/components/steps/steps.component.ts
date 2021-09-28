import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepModel } from '../../models/steps.model';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  steps: StepModel[] = []
  currentStep: StepModel = {} as StepModel;

  constructor(private stepsService: StepsService) { 
    this.steps = [];
  }
  /**
   * Function to define number of steps and current step
   */
  ngOnInit(): void {
   this.stepsService.steps$.subscribe(response => {
     this.steps = response;
   });
   this.stepsService.currentStep$.subscribe(response => {
    this.currentStep = response;
   })
  }
/**
 * Function to set the current step on click
 * @param step : Step
 */
  onStepClick(step: StepModel) {
    this.stepsService.setCurrentStep(step);
  }

}
