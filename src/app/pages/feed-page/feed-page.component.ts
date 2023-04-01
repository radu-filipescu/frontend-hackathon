import { Component, OnInit } from '@angular/core';
import { HistoryDTO } from 'src/app/DTOs/historyDTO';
import { HistoryService } from 'src/app/service/history.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
  posts: HistoryDTO[] = [];
  constructor(private historyService : HistoryService) { }

  ngOnInit(): void {
    this.refreshFeed();
  }

  private refreshFeed(){
    this.historyService.getFeed()
    .subscribe(res => {
        for(let post of res){
          this.posts.push(post);
        }
      }
    )
  }

}
