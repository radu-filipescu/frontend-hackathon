import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/app/DTOs/CompanyDTO';

@Component({
  selector: 'app-external-leaderboard-page',
  templateUrl: './external-leaderboard-page.component.html',
  styleUrls: ['./external-leaderboard-page.component.scss']
})
export class ExternalLeaderboardPageComponent implements OnInit {

  companies: CompanyDTO[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
