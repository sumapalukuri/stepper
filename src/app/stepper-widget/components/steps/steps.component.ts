import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTab, MatTabChangeEvent } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { StepModel } from '../../models/steps.model';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input() steps: StepModel[] = [];
  @Output() valueChange: EventEmitter<number> = new EventEmitter();
  constructor(private stepsService: StepsService) { 
  }
  /**
   * Function to define number of steps and current step
   */
  ngOnInit(): void {
  }
  
  onClickOfTab(tab: MatTabChangeEvent) {
    this.valueChange.emit(tab.index)
  }

}
