import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // Handle form submission
  }
}
