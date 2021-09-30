import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { StepModel } from '../../models/steps.model';
import { StepsService } from '../../service/steps.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPageComponent implements OnInit, AfterViewInit {

  steps: StepModel[] = []
  @ViewChild('content', { read: TemplateRef }) content: TemplateRef<any>|undefined;
  currentIndex!: number;
  constructor(
    private stepsService: StepsService) { 
    }

  ngOnInit(): void {
    this.stepsService.steps$.subscribe(response => {
      this.steps = response;
    })
    this.currentIndex = 0;
  }

   ngAfterViewInit() {
     this.steps.forEach(step => {
       step.template = this.content
     })
   }
   selectedChange(event: any) {
    this.currentIndex = event;
   }
}
