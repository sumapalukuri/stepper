import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { StepModel } from '../../models/steps.model';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-steps-template',
  templateUrl: './steps-template.component.html',
  styleUrls: ['./steps-template.component.scss']
})
export class StepsTemplateComponent implements OnInit {

  @Input() step: StepModel = {} as StepModel;
  steps: StepModel[] = []
  constructor(private stepService: StepsService) { }

  ngOnInit(): void {
    this.stepService.steps$.subscribe(response => {
      this.steps = response;
    })
  }

  onCompleteStep() {
    this.step.isComplete = true;
  }
}
