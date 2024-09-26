import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero',
    template: '',
  })
  export class HeroComponent {
    @Input() hero: any;
  }