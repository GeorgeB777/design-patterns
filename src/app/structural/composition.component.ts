import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
      <!-- <app-widget *ngFor="let widget of widgets" [widget]="widget"></app-widget> -->
    `
  })
  export class DashboardComponent {
    widgets: any = [
      { id: 1, name: 'Widget 1' },
      { id: 2, name: 'Widget 2' }
    ];
  }