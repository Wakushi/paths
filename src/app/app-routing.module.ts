import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ChoiceComponent } from './modules/choice/choice.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paths', component: ChoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
