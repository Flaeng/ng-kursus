import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsviewComponent } from './detailsview/detailsview.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full'
  },
  {
    path: 'liste',
    component: ListviewComponent,
  },
  {
    path: 'detaljer/:kode',
    component: DetailsviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}







