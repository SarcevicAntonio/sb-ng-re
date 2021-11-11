import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';
import { LibComponent } from './lib.component';

@NgModule({
  declarations: [LibComponent, ChildComponent],
  imports: [],
  exports: [LibComponent, ChildComponent],
})
export class LibModule {}
