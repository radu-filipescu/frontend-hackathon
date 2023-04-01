import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/UserDTO';
import { CompanyService } from 'src/app/service/company.service';
import { CONFIG } from 'src/app/shared/CONFIG';

@Component({
  selector: 'app-internal-leaderboard-page',
  templateUrl: './internal-leaderboard-page.component.html',
  styleUrls: ['./internal-leaderboard-page.component.scss']
})
export class InternalLeaderboardPageComponent implements OnInit {
  CONFIG: CONFIG = new CONFIG();
  employees: UserDTO[] = [];

  currentUser: UserDTO = new UserDTO();

  constructor(private httpClient: HttpClient, private companyService: CompanyService) { }

  getMyInformation() {
    this.httpClient.get(this.CONFIG.backendDevAPI + 'Login')
      .subscribe(result => {
        let loginResult = String((result as any).value);

        if(loginResult != "not logged in") {
          let userId: string = loginResult.split(' ')[2];

          this.httpClient.get(this.CONFIG.backendDevAPI + 'Users/' + userId)
            .subscribe(result => {
              this.currentUser = (result as UserDTO);

              // TODO: make call to get filtered users
            });

        }
      });
  }

  ngOnInit(): void {
    this.getMyInformation();

    /*this.companyService.getUsers()
    .subscribe(res => {
        for(let post of res){
          this.employees.push(post);
        }
        this.employees.sort((a, b) => b.score - a.score);
      }
    )*/
  }

}
