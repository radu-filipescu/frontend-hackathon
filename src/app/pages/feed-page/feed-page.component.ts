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
    this.historyService.getMockData().then((result) => {
      this.posts = result;
      this.posts.sort((a, b) => a.date.localeCompare(b.date));
    })
  }

}
