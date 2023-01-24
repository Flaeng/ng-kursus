import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForsideComponent } from "./forside/forside.component";

const routes: Routes = [
  {
    path: 'forside',
    component: ForsideComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Section1RoutingModule { }
