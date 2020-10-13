import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DiveComponent } from './components/dive/dive.component';
import { HeroService } from './components/dive/hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService],
  declarations: [DiveComponent]
})
export class DivingModule { }
