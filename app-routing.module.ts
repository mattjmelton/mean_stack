import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "pets", component: AllComponent},
  {path: "pets/new", component: NewComponent},
  {path: "pets/:id", component: DetailComponent},
  {path: "pets/edit/:id", component: EditComponent},
  {path: "", component: AllComponent, pathMatch:"full"},
  {path: "*", redirectTo: "pets"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
