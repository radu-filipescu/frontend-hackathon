import { Injectable } from '@angular/core';
import { HistoryDTO } from '../DTOs/historyDTO';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }
  async getMockData(){
    let historyPosts = [];
    let historyPost1 = new HistoryDTO();
    historyPost1.date = "30.03.2023";
    historyPost1.actionId = "101";
    historyPost1.id = "201";
    historyPost1.userId = "301";

    let historyPost2 = new HistoryDTO();
    historyPost2.date = "01.04.2023";
    historyPost2.actionId = "102";
    historyPost2.id = "202";
    historyPost2.userId = "301";

    let historyPost3 = new HistoryDTO();
    historyPost3.date = "29.03.2023";
    historyPost3.actionId = "101";
    historyPost3.id = "203";
    historyPost3.userId = "302";

    let historyPost4 = new HistoryDTO();
    historyPost4.date = "31.04.2023";
    historyPost4.actionId = "103";
    historyPost4.id = "204";
    historyPost4.userId = "302";

    historyPosts.push(historyPost1);
    historyPosts.push(historyPost2);
    historyPosts.push(historyPost3);
    historyPosts.push(historyPost4);
    return historyPosts
  }
}
