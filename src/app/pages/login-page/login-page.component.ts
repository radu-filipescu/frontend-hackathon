import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginDTO } from 'src/app/DTOs/loginDTO';
import { CONFIG } from 'src/app/shared/CONFIG';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  CONFIG: CONFIG = new CONFIG();

  loginInfo: loginDTO = new loginDTO();

  loginAPI: string = ""

  constructor(private router: Router, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    let loginResult = localStorage.getItem("loginStatus");

    if(loginResult && String(loginResult as any).startsWith('normal')){
      this.router.navigate(['home']);
    } 
    else if(loginResult && String(loginResult as any).startsWith('company')){
      this.router.navigate(['adminhome']);
    }
  }

  onSubmit() {
    // Handle form submission
    this.httpClient.post<string>(this.CONFIG.backendDevAPI + 'Login', this.loginInfo)
      .subscribe(result => {

        localStorage.setItem("loginStatus", String((result as any).value));

        if(String((result as any).value).startsWith('normal user'))
          this.router.navigate(['home']);
        if(String((result as any).value).startsWith('company admin'))
          this.router.navigate(['adminhome']);

        if((result as any).value == 'not logged in')
          window.alert('wrong credentials!');
      })
  }
}
