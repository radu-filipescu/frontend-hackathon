import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  showDescriptions: boolean[] = [false, false, false, false, false];

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
