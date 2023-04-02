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
    this.httpClient.get(this.CONFIG.backendDevAPI + 'Login')
      .subscribe(result => {
        //console.log('test');
        //console.log(result);

        if((result as any).value != 'not logged in')
          this.router.navigate(['home']);
      });
  }

  onSubmit() {
    // Handle form submission
    this.httpClient.post(this.CONFIG.backendDevAPI + 'Login', this.loginInfo)
      .subscribe(result => {
        if(String((result as any).value).startsWith('normal user'))
          this.router.navigate(['home']);
        if(String((result as any).value).startsWith('company admin'))
          this.router.navigate(['adminhome']);

        if((result as any).value == 'not logged in')
          window.alert('wrong credentials!');
      })
  }
}
