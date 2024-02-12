import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  searchTerm: string = '';
  users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Emily Davis' },
    { id: 6, name: 'Michael Wilson' },
    { id: 7, name: 'Sarah Taylor' },
    { id: 8, name: 'David Clark' },
    { id: 9, name: 'Jennifer Martinez' },
    { id: 10, name: 'James Anderson' }
  ];

  filteredUsers: User[] = [];
  selectedUsers: User[] = [];

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectUser(user: User) {
    this.selectedUsers.push(user);
    this.searchTerm = ''; // Clear search term after selecting user
    this.filteredUsers = []; // Clear filtered results
  }

  removeUser(user: User) {
    this.selectedUsers = this.selectedUsers.filter(u => u.id !== user.id);
  }
}
