import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewComponent, EditComponent]
})
export class ResumeModule { }
