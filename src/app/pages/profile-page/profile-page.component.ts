import { Component, OnInit } from '@angular/core';
import { userDTO } from 'src/app/DTOs/UserDTO';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  currentUser: userDTO = new userDTO();

  constructor() { }

  ngOnInit(): void {
  }

}
