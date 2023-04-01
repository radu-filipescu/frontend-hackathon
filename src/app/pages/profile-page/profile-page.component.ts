import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/UserDTO';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  currentUser: UserDTO = new UserDTO();

  constructor() { }

  ngOnInit(): void {
    this.currentUser = new UserDTO();

    this.currentUser.name = "Andrei Ionascu";
    this.currentUser.email = "andrei@cercopitechs.com";
    this.currentUser.score = 5000
    this.currentUser.companyId = "santierul cucu";
  }

}
