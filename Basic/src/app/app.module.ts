import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './components/shared/users-list/users-list.component';
import { TestUserListComponent } from './components/test-user-list/test-user-list.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalFormComponent,
    UsersListComponent,
    TestUserListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
