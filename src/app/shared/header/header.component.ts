import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { loginDTO } from 'src/app/DTOs/loginDTO';
import { CONFIG } from '../CONFIG';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  CONFIG: CONFIG = new CONFIG();

  faSignOutAlt = faSignOutAlt;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['']);
  }

  logOut() {
    let logoutTMP = new loginDTO();

    logoutTMP.email = '123awd123gu';
    logoutTMP.password = 'ao2oi130-';

    this.httpClient.post(this.CONFIG.backendDevAPI + 'Login', logoutTMP)
      .subscribe(response => {
        this.router.navigate(['login']);
      })


  }
}
