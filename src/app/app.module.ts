import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeModule } from './modules/resume/resume.module';
import { DivingModule } from './modules/diving/diving.module';
import { IfAdventureModule } from './modules/if-adventure/if-adventure.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResumeModule,
    DivingModule,
    IfAdventureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
