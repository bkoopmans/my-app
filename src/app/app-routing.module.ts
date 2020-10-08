import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './modules/resume/components/view/view.component';
import { DiveComponent } from './modules/diving/components/dive/dive.component';
import { IfHomeComponent } from './modules/if-adventure/components/if-home/if-home.component';

const routes: Routes = [
  {
    path:'', component: ViewComponent
  },
  {
    path:'diving', component: DiveComponent
  },
  {
    path:'ifAdventure', component: IfHomeComponent
  },
  { 
    path:'**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
