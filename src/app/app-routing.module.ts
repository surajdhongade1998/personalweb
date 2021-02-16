import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelListComponent } from './panel-list/panel-list.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/panel-list',
      pathMatch: 'full'
    },
    {
      path: 'panel-list',
      component: PanelListComponent
    }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
