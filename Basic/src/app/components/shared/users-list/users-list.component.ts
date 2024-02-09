import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.ts';
import { users } from 'src/assets/data';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() usersList!: User[] 
  @Output() selectedUser = new EventEmitter<User>();

  ngOnInit(): void {
    console.log(this.usersList)
  }

  isValidUser(user: User): boolean {
    console.log(user)
    if (!user) return false;
    return !!user.id && !!user.displayName;
  }

  selectUser(user: User) {
    console.log('This is select user function.')
    console.log(user)
    const isValid = this.isValidUser(user);
    if (isValid) {
      console.log(user);
      this.selectedUser.emit(user);
    }
    else console.log('No user selected');
  }

  getUserImageFromName(user: User): string {
    if (user && user.givenName && user.surname) {
      return (user.givenName[0] + user.surname[0]).toUpperCase();
    } else {
      return "";
    }
  }


  getUserShortName(user: User): string {
    if (user && user.userPrincipalName) return user.userPrincipalName.split('@')[0].toUpperCase();
    return "";
  }


}
