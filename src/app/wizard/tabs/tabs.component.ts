import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList } from '@angular/core';
import { StepModel } from 'src/app/stepper-widget/models/steps.model';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>
  currentTab!: TabComponent | undefined;
  @Output() valueChange: EventEmitter<StepModel> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.tabs.forEach(tabInstance => console.log(tabInstance));
    this.currentTab = this.tabs?.first;
    this.valueChange.emit(this.currentTab?.step)
  }
  onTabClick(tab: TabComponent) {
    this.currentTab = tab;
    this.valueChange.emit(tab.step)
  }
  isSelected(tab: TabComponent) {
    return this.currentTab?.step?.stepName === tab.step.stepName;
  }
}
