import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'lib-parent',
  template: `
    <p>Parent Component</p>
    <ng-content></ng-content>
  `,
  styles: [],
})
export class LibComponent implements AfterViewInit {
  @ContentChildren(forwardRef(() => ChildComponent))
  children!: QueryList<ChildComponent>;

  ngAfterViewInit(): void {
    console.log('From Parent', this.children);
  }

  someFunction(): void {
    console.log('Hello from parent.someFunction');
  }
}
