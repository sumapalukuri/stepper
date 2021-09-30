import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { StepModel } from 'src/app/stepper-widget/models/steps.model';
import { StepsService } from 'src/app/stepper-widget/service/steps.service';
import { WizardStepService } from '../service/wizard-step.service';

@Component({
  selector: 'app-wizard-tabs',
  templateUrl: './wizard-tabs.component.html',
  styleUrls: ['./wizard-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardTabsComponent implements OnInit {
  steps: StepModel[] = [];
  @ViewChild('content', { read: TemplateRef }) content: TemplateRef<any>|undefined;
  currentStep: StepModel = {} as StepModel;
  actionPerformed: boolean = false;
  constructor(private stepService: WizardStepService) { }

  ngOnInit(): void {
     this.stepService.steps$.subscribe(response => {
      this.steps = response
     })
    this.currentStep = this.steps[0];
  }

  ngAfterViewInit() {
    this.steps.forEach(step => {
      step.template = this.content
    })
  }

  selectedChange(event: any) {
    if(!event) {
      this.currentStep = this.steps[0];
    } else {
      this.currentStep = event;
    }
    this.stepService.setCurrentStep(this.currentStep);
   }

   performAction() {
     this.actionPerformed = true;
     this.currentStep.isComplete = true;
     this.steps[this.currentStep.stepIndex].isNavigable = true;
    const portfolioSteps = this.steps.filter(step => step.isPortfolioStep);
    const portfolioStepsCompleted = portfolioSteps.every(step => step.isComplete);
    if(portfolioStepsCompleted) {
      this.steps.filter(step => !step.isPortfolioStep).forEach(step => {
        step.isNavigable = true;
      })
    }
     this.stepService.updateSteps(this.steps);
   }

   onClickOfNext() {
     this.stepService.moveToNextStep();
   }

}
