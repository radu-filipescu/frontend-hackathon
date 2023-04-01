import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/DTOs/UserDTO';
import { HistoryDTO } from 'src/app/DTOs/historyDTO';
import { HistoryService } from 'src/app/service/history.service';
import { CONFIG } from 'src/app/shared/CONFIG';
import { Action } from 'src/app/shared/Action';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
  CONFIG: CONFIG = new CONFIG();
  posts: HistoryDTO[] = [];
  usersMap: Map<string, string> = new Map<string, string>();
  actionTranslator: Action = new Action();

  constructor(private historyService : HistoryService, private httpClient: HttpClient) { }

  ngOnInit(): void {    
    this.refreshFeed();
  }

  private refreshFeed(){

    this.httpClient.get<UserDTO[]>(this.CONFIG.backendDevAPI + 'Users')
      .subscribe(users => {

        for(let user of users){
          this.usersMap.set(user.id, user.name);
        }

        this.historyService.getFeed()
        .subscribe(res => {
          for(let post of res){
            this.posts.push(post);
          }
        }
      )
      })
  }

}
