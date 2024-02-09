import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './components/shared/users-list/users-list.component';
import { TestUserListComponent } from './components/test-user-list/test-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalFormComponent,
    UsersListComponent,
    TestUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
