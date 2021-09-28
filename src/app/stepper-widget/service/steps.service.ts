import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StepModel } from '../models/steps.model';

const STEPS = [
  { stepIndex: 1, isComplete: false, stepName: 'First Step', isNavigable: true },
  { stepIndex: 2, isComplete: false, stepName: 'Second Step', isNavigable: false },
  { stepIndex: 3, isComplete: false, stepName: 'Third Step', isNavigable: false  }
];
const initialCurrentStepValue = {
  stepIndex: 1,
  isComplete: false,
  stepName: 'First Step',
  isNavigable: true
}
@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  stepsObservable = this.steps$.asObservable();
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(initialCurrentStepValue);
  currentStepObservable = this.currentStep$.asObservable();

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }
/**
 * Function used to set the current step
 * @param step :updating step 
 */
  setCurrentStep(step: StepModel): void {
    this.currentStep$.next(step);
  }
/**
 * Function used to move to next step
 */
  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
      this.steps$.next(this.steps$.value)
    }
  }
/**
 * Function used to check whether the current step is last step or not
 * @returns : boolean
 */
  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
}
