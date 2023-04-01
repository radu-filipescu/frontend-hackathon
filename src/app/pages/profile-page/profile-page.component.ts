import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/UserDTO';
import { CONFIG } from 'src/app/shared/CONFIG';
import { User } from '../add-user-page/add-user-page.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  currentUser: UserDTO = new UserDTO();
  CONFIG: CONFIG = new CONFIG();

  constructor(private httpClient: HttpClient) { }

  mockAchivements: { url: string, tooltip: string}[] = []

  getMyInformation() {
    this.httpClient.get(this.CONFIG.backendDevAPI + 'Login')
      .subscribe(result => {
        let loginResult = String((result as any).value);

        if(loginResult != "not logged in") {
          let userId: string = loginResult.split(' ')[2];

          this.httpClient.get(this.CONFIG.backendDevAPI + 'Users/' + userId)
            .subscribe(result => {
              this.currentUser = (result as UserDTO);

              this.httpClient.get(this.CONFIG.backendDevAPI + 'Company/' + this.currentUser.companyId)
                .subscribe(result => {
                  this.currentUser.companyId = (result as any).name;

                  this.initializeMockAchivments()
                });
            });

        }
      });
  }

  initializeMockAchivments() {
    this.mockAchivements.push({url: "../../../assets/images/blue-medal.jpg", tooltip: "Blue hero - use a non-plastic bottle more than 10 times"});
    this.mockAchivements.push({url: "../../../assets/images/gold-medal.png", tooltip: "Golden - be top one in your company once"});
    this.mockAchivements.push({url: "../../../assets/images/green-medal.webp", tooltip: "Gardner - plant a tree"});
  }

  ngOnInit(): void {
    this.getMyInformation();

    this.currentUser = new UserDTO();

    this.currentUser.name = "Andrei Ionascu";
    this.currentUser.email = "andrei@cercopitechs.com";
    this.currentUser.score = 5000
    this.currentUser.companyId = "santierul cucu";
  }

}
