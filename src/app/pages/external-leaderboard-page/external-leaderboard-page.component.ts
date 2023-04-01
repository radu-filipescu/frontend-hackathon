import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/app/DTOs/CompanyDTO';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-external-leaderboard-page',
  templateUrl: './external-leaderboard-page.component.html',
  styleUrls: ['./external-leaderboard-page.component.scss']
})
export class ExternalLeaderboardPageComponent implements OnInit {

  companies: CompanyDTO[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getMockCompanies().then((result) => {
      this.companies = result;

      this.companies.sort((a, b) => b.score - a.score);
    })
  }

}
