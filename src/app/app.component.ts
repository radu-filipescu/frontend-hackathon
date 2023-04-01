import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  faCoffee = faCoffee;

  bottomBarVisible: boolean = true;

  constructor(private router: Router) {

  }

  ngOnInit() {
    if(this.router.url == '/login' || this.router.url == '/')
      this.bottomBarVisible = false;

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)

        if((event as any).url)
          if((event as any).url == '/login' || (event as any).url == '/')
            this.bottomBarVisible = false;
          else
            this.bottomBarVisible = true;
    });
  }
}
