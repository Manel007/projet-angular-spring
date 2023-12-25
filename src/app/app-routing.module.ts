import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocComponent } from './bloc/bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';

const routes: Routes = [
  {path:'bloc',component:BlocComponent},
  {
    path: 'update-bloc/:id',
    component: UpdateBlocComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
