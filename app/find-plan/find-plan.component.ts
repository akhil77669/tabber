import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-find-plan',
  templateUrl: './find-plan.component.html',
  styleUrls: ['./find-plan.component.css'],
})
export class FindPlanComponent implements OnInit {
  @Output() change = new EventEmitter();
  data: any = [
    {
      price: '$0.00 / down',
      heading: 'Community Health & Fitness',
      label: 'Individual Plan',
      lead: '$0.00 / down $0.00 / month Open Ended Agreement',
    },
    {
      price: '$80.00 / down',
      heading: 'Individual Plan',
      label: 'Individual Plan',
      lead: '$80.00 / down $125.00 / 12 month agreement term length',
    },
    {
      price: '$130.00 / down',
      heading: 'Family Plan',
      label: 'Individual Plan',
      lead: '$130.00 / down $0.00 / 13 month agreement term length',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  clicked() {
    this.change.emit();
  }
}
