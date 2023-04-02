import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/UserDTO';
import { ImageDTO } from 'src/app/DTOs/ImageDTO';
import { HistoryDTO } from 'src/app/DTOs/historyDTO';
import { HistoryService } from 'src/app/service/history.service';
import { CONFIG } from 'src/app/shared/CONFIG';
import { Action } from 'src/app/shared/Action';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
  faLeaf = faLeaf;
  CONFIG: CONFIG = new CONFIG();
  posts: HistoryDTO[] = [];
  usersMap: Map<number, UserDTO> = new Map<number, UserDTO>();
  photoMap: Map<string, SafeResourceUrl> = new Map<string, string>();
  actionTranslator: Action = new Action();
  connectedUser: UserDTO = new UserDTO;

  constructor(
    private historyService : HistoryService, 
    private httpClient: HttpClient,
    private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.refreshFeed();
  }

  getMockStreak(actionId: number): string{
    if(actionId == 4) return ' for 2 days in a row';
    if(actionId == 1) return ' for 5 days in a row';
    
    return '';
  }

  private refreshFeed(){

    this.httpClient.get<UserDTO[]>(this.CONFIG.backendDevAPI + 'Users')
      .subscribe(users => {

        for(let user of users){
          this.usersMap.set(user.id, user);
        }

        let loginResult = localStorage.getItem("loginStatus");
        if(loginResult){
          if(loginResult != "not logged in") {
            console.log(loginResult)
            let userId: string = loginResult.split(' ')[2];
            let companyId;
            if(loginResult.split(' ')[0] === 'normal'){
              this.connectedUser = this.usersMap.get(parseInt(userId))!;
              companyId = this.connectedUser.companyId;
            } else {
              companyId = userId;
            }
                this.httpClient.get<HistoryDTO[]>(this.CONFIG.backendDevAPI + 'History/GetHistoryByCompanyId/' + companyId )
                .subscribe(posts => {
                  for(let post of posts){
                    this.posts.push(post);
        
                    this.httpClient.get<ImageDTO>(this.CONFIG.backendDevAPI + 'Image/' + post.photoPath)
                      .subscribe(image => {
                          this.photoMap.set(image.imageName, this._sanitizer.bypassSecurityTrustResourceUrl(image.imageAsBase64));
                      })
                  }
                })
              }
        }
    })
  }
}
