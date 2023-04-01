import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import * as handTrack from 'handtrackjs';
import { HistoryDTO } from 'src/app/DTOs/historyDTO';
import { ImageDTO } from 'src/app/DTOs/ImageDTO';
import { UserDTO } from 'src/app/DTOs/UserDTO';
import { Action } from 'src/app/shared/Action';
import { CONFIG } from 'src/app/shared/CONFIG';

import {formatDate} from '@angular/common';

@Component({
  selector: 'app-proof-page',
  templateUrl: './proof-page.component.html',
  styleUrls: ['./proof-page.component.scss']
})
export class ProofPageComponent implements OnInit {
  CONFIG = new CONFIG();

  faSpinner = faSpinner;

  webcamIsLoading: boolean = true;

  video: any;
  model: any;

  canvas: any;
  context: any;

  sendEnabled: boolean = false;
  successMessageVisible: boolean = false;

  utils: Action = new Action();

  randomGestures: string[] = ["an open palm", "a closed fist", "a finger pointing upwards"];
  chosenGesture: string = "";

  action: string = "";

  screenShot: string = "";

  currentUser: UserDTO = new UserDTO();

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  defaultParams = {
    flipHorizontal: false,
    outputStride: 16,
    imageScaleFactor: 1,
    maxNumBoxes: 20,
    iouThreshold: 0.2,
    scoreThreshold: 0.6,
    modelType: "ssd320fpnlite",
    modelSize: "large",
    bboxLineWidth: "2",
    fontSize: 17,
};

  checkPrediction(predictions: any) {
    if(!predictions || predictions.length == 0)
      return false;

    for(let i = 0; i < predictions.length; i++) {
      if(predictions[i].label == 'open' && this.chosenGesture == "an open palm" ||
      predictions[i].label == 'closed' && this.chosenGesture == "a closed fist" ||
      predictions[i].label == 'point' && this.chosenGesture == "a finger pointing upwards")
        return true;
    }

    return false;
  }

  startPredicting() {
    this.webcamIsLoading = false;

    let checker = setInterval( () => {
      this.model.detect(this.video)
        .then((predictions: any) => {
          //console.log('interval');

          if(predictions != undefined)
            if(this.checkPrediction(predictions)) {
              this.video.pause();
              this.screenShot = this.canvas.toDataURL();

              this.sendEnabled = true;

              clearInterval(checker);
            }


          let ctx = this.canvas.getContext("2d");
          this.model.renderPredictions(predictions, this.canvas, this.context, this.video);
        })
    }, 400);

  }

  sendPhoto() {
    if(!this.sendEnabled)
      return;

    // send action to backend
    let currentAction: HistoryDTO = new HistoryDTO();

    let format = 'yyyy-MM-ddTHH:mm:ss';
    let myDate = new Date();
    let locale = 'en-US';
    let formattedDate = formatDate(myDate, format, locale);
    currentAction.date = formattedDate;
    currentAction.userId = this.currentUser.id;
    currentAction.actionId = this.utils.getNumberByName(this.action);

    this.httpClient.post<HistoryDTO>(this.CONFIG.backendDevAPI + 'History', currentAction)
      .subscribe(response => {
        let imageId = response.id;

        let image = new ImageDTO();
        image.imageAsBase64 = this.screenShot;
        image.imageName = imageId.toString();

        this.httpClient.post(this.CONFIG.backendDevAPI + 'Image', image)
          .subscribe(result => {
            if(String((result as any).value) == "Image uploaded") {
              this.successMessageVisible = true;
              setTimeout( () => {
                this.successMessageVisible = false;
                this.router.navigate(['home']);
              }, 3000);
            }
          })
      });
  }

  getMyInformation() {
    this.httpClient.get(this.CONFIG.backendDevAPI + 'Login')
      .subscribe(result => {
        let loginResult = String((result as any).value);

        if(loginResult != "not logged in") {
          let userId: string = loginResult.split(' ')[2];

          this.httpClient.get(this.CONFIG.backendDevAPI + 'Users/' + userId)
            .subscribe(result => {
              this.currentUser = (result as UserDTO);
            });

        }
      });
  }

  async ngOnInit() {
    this.getMyInformation();

    let param = this.route.snapshot.paramMap.get('action');
    if(param){
      this.action = param;
    }

    this.chosenGesture = this.randomGestures[Math.floor(Math.random() * this.randomGestures.length)];

    this.model = await handTrack.load(this.defaultParams);
    this.video = document.getElementById('videoid');
    this.canvas = (document.getElementById('canvasid') as HTMLCanvasElement);
    this.context = this.canvas.getContext("2d");

    // get phone size
    let phoneHeight = window.innerHeight;
    let phoneWidth = window.innerWidth;

    handTrack.startVideo(this.video);
  }

  refreshProofPage() {
    window.location.reload();
  }

}
