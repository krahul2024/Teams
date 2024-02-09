import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.ts';
import { users } from 'src/assets/data';

@Component({
  selector: 'app-test-user-list',
  templateUrl: './test-user-list.component.html',
  styleUrls: ['./test-user-list.component.css']
})
export class TestUserListComponent implements OnInit {
  users : User[] = users.slice(0, 5); 

  ngOnInit() : void{
    console.log(this.users); 
  }
}
