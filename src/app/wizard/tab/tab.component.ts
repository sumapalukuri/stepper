import { Component, Input, OnInit } from '@angular/core';
import { StepModel } from 'src/app/stepper-widget/models/steps.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() step: StepModel = {} as StepModel;
  constructor() { }

  ngOnInit(): void {
  }

}
