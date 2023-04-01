import { Component, OnInit } from '@angular/core';

export interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.scss']
})
export class AddUserPageComponent implements OnInit {
  user: User = {
    username: '',
    email: '',
    password: '',
  };
  constructor() { }

  onSubmit(): void {
    //this.userService.addUser(this.user).subscribe();
  }

  ngOnInit(): void {
  }

}
