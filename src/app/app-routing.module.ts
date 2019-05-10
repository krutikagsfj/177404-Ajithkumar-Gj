import { SuccessComponent } from './success/success.component';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path:'', component: PlayComponent, pathMatch: 'full'},
  {path:'play', component: PlayComponent},
  {path:'success', component: SuccessComponent}
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
