import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/UserDTO';
import { ImageDTO } from 'src/app/DTOs/ImageDTO';
import { HistoryDTO } from 'src/app/DTOs/historyDTO';
import { HistoryService } from 'src/app/service/history.service';
import { CONFIG } from 'src/app/shared/CONFIG';
import { Action } from 'src/app/shared/Action';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
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

  private refreshFeed(){

    this.httpClient.get<UserDTO[]>(this.CONFIG.backendDevAPI + 'Users')
      .subscribe(users => {

        for(let user of users){
          this.usersMap.set(user.id, user);
        }

        this.httpClient.get<HistoryDTO[]>(this.CONFIG.backendDevAPI + 'Login')
      .subscribe(result => {
        let loginResult = String((result as any).value);

        if(loginResult != "not logged in") {
          let userId: string = loginResult.split(' ')[2];
          this.connectedUser = this.usersMap.get(parseInt(userId))!;

              this.httpClient.get<HistoryDTO[]>(this.CONFIG.backendDevAPI + 'History/GetHistoryByCompanyId/' + this.connectedUser.companyId )
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
            });

      });
    }
}
