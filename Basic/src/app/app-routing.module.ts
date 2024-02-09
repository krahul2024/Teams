import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { TestUserListComponent } from './components/test-user-list/test-user-list.component';

const routes: Routes = [
  {path : 'modal', title : 'Modal Form', component : ModalFormComponent }, 
  { path : 'test', title : 'User List testing', component : TestUserListComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
