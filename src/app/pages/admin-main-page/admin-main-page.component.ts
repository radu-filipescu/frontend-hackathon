import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBrain, faSeedling, faBicycle,  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {

  faBrain = faBrain;

  showDescriptions: boolean[] = [false, false, false, false];

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  showDescriptionPanel(index: number) {
    if(this.showDescriptions[index]){
      this.showDescriptions[index] = false;
    } else {
      for(let i=0; i < this.showDescriptions.length; i++){
        this.showDescriptions[i] = false;
      }

      this.showDescriptions[index] = true;
    }
  }

  goToProof(actionName: string) {
    this.router.navigate(['proof', actionName]);
  }

}
