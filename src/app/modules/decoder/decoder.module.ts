import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DecoderComponent } from './components/decoder/decoder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DecoderComponent]
})
export class DecoderModule { }
