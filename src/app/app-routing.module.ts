import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesFormComponent } from './components/series-form/series-form.component';
import { SeriesListComponent } from './components/series-list/series-list.component';


const routes: Routes = [
  {
    path : ' ' ,
redirectTo: '/series',
pathMatch: 'full'
  },
  {
    path: 'series',
component: SeriesListComponent
  },{
    path: 'series/add',
    component: SeriesFormComponent
  },
  {
    path:'series/edit/:id',
    component: SeriesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
