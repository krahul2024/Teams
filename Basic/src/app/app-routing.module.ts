import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalFormComponent } from './components/modal-form/modal-form.component';

const routes: Routes = [
  {path : 'modal', title : 'Modal Form', component : ModalFormComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
