import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faPlusCircle, faClock, faMedal, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faClock = faClock;
  faMedal = faMedal;
  faUser = faUser;
  faTrophy = faTrophy;
  faPlusCircle = faPlusCircle;
  visible : boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let loginResult = localStorage.getItem("loginStatus");
    if(loginResult && String(loginResult as any).startsWith('company')){
      this.visible = false;
    }
  }
}
