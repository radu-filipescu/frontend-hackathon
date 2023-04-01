import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/UserDTO';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-internal-leaderboard-page',
  templateUrl: './internal-leaderboard-page.component.html',
  styleUrls: ['./internal-leaderboard-page.component.scss']
})
export class InternalLeaderboardPageComponent implements OnInit {

  employees: UserDTO[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getUsers()
    .subscribe(res => {
        for(let post of res){
          this.employees.push(post);
        }
        this.employees.sort((a, b) => b.score - a.score);
      }
    )
  }

}
