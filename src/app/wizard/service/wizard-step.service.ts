import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StepModel } from 'src/app/stepper-widget/models/steps.model';

const STEPS = [
  { stepIndex: 1, isComplete: false, stepName: 'First Step', isNavigable: true, isPortfolioStep: true },
  { stepIndex: 2, isComplete: false, stepName: 'Second Step', isNavigable: false, isPortfolioStep: true },
  { stepIndex: 3, isComplete: false, stepName: 'Third Step', isNavigable: false, isPortfolioStep: true  },
  { stepIndex: 4, isComplete: false, stepName: 'Forth Step', isNavigable: false, isPortfolioStep: false  },
  { stepIndex: 5, isComplete: false, stepName: 'Fifth Step', isNavigable: false, isPortfolioStep: false  },
  { stepIndex: 6, isComplete: false, stepName: 'Sixth Step', isNavigable: false, isPortfolioStep: false  },
];
const initialCurrentStepValue = {
  stepIndex: 1,
  isComplete: false,
  stepName: 'First Step',
  isNavigable: true,
  isPortfolioStep: true
}

@Injectable({
  providedIn: 'root'
})
export class WizardStepService {

  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  stepsObservable = this.steps$.asObservable();
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(initialCurrentStepValue);
  currentStepObservable = this.currentStep$.asObservable();

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  updateSteps(steps: StepModel[]):void {
    this.steps$.next(steps);
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
