import { Component, OnInit, Optional } from '@angular/core';
import { LibComponent } from './lib.component';

@Component({
  selector: 'lib-child',
  template: ` <button (click)="handleClick()">Child Component</button>`,
  styles: [],
})
export class ChildComponent implements OnInit {
  parent: LibComponent;

  constructor(@Optional() parent: LibComponent) {
    this.parent = parent;
  }

  ngOnInit(): void {
    console.log('From Child', this.parent);
  }

  handleClick() {
    this.parent.someFunction();
  }
}
