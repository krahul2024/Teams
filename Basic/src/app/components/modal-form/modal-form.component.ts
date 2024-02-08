import { Component } from '@angular/core';
import { users as Users } from '../../../assets/data'; // @ts-ignore 
import { User } from 'src/app/interfaces/user.ts';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  showModal: boolean = true;
  enableShare: boolean = false;
  cancelSharing: boolean = false;

  searchTerm: string = "";
  usersConcatenatedList: string = "";

  users: User[] = Users.slice(0, 20); // hard-coded list of users

  filteredUsers: User[] = this.users.slice(0, 6);
  selectedUsers: User[] = []


  /*
    Users are filtered on the following basis 
    - if the search value is included in name : displayName
  */

  filterUser(): void {
    this.filteredUsers = this.users.filter((user: User) => {
      const isValidTerm = this.searchTerm.length > 0;
      const userContainsTerm = user.displayName?.toLocaleLowerCase().includes(this.searchTerm);
      return isValidTerm && userContainsTerm;
    });

    this.filteredUsers.map(user => console.log(user.displayName))
  }

  //--------Add the bottom border on focus 
  addBorderOnFocus(event: any) {
    console.log(event.target.classList);
    this.filteredUsers = this.users.slice(0, 10);
    event.target.classList.add('share-with-input-focus');
  }

  // -----------Remove the bottom border when focus is lost
  removeBorderOnBlur(event: any) {
    event.target.classList.remove('share-with-input-focus');
    this.filteredUsers = [];
  }

  //---------------Modal operations 
  toggleModal() {
    console.log(this.showModal ? 'Modal closed' : 'Modal opened');
    this.showModal = !this.showModal;
    this.cancelSharing = true;
  }

  getSelectedUser(user: User) {
    console.log(user);
    if (user) {
      this.selectedUsers.push(user);
      this.usersConcatenatedList += (user.displayName + ", ");
    }
    console.log(this.selectedUsers)
    this.filteredUsers = [];
  }
}
