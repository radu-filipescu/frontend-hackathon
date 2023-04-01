import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// @ts-ignore
import * as handTrack from 'handtrackjs';

@Component({
  selector: 'app-proof-page',
  templateUrl: './proof-page.component.html',
  styleUrls: ['./proof-page.component.scss']
})
export class ProofPageComponent implements OnInit {

  video: any;
  model: any;

  canvas: any;
  context: any;

  randomGestures: string[] = ["an open palm", "a closed fist", "a finger pointing upwards"];
  chosenGesture: string = "";

  action: string = "";

  constructor(private route: ActivatedRoute,) { }

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
      if(predictions[0].label == 'open' && this.chosenGesture == "an open palm" ||
      predictions[0].label == 'closed' && this.chosenGesture == "a closed fist" ||
      predictions[0].label == 'point' && this.chosenGesture == "a finger pointing upwards")
        return true;
    }

    return false;
  }

  startPredicting() {
    setInterval( () => {
      this.model.detect(this.video)
        .then((predictions: any) => {
          //console.log(predictions);

          if(predictions != undefined)
            if(this.checkPrediction(predictions)) {
              this.video.pause();
            }


          let ctx = this.canvas.getContext("2d");
          this.model.renderPredictions(predictions, this.canvas, this.context, this.video);
        })
    }, 200);

  }

  async ngOnInit() {
    let param = this.route.snapshot.paramMap.get('action');
    if(param){
      this.action = param;
    }

    this.chosenGesture = this.randomGestures[Math.floor(Math.random() * this.randomGestures.length)];

    this.model = await handTrack.load(this.defaultParams);
    this.video = document.getElementById('videoid');
    this.canvas = document.getElementById('canvasid');
    this.context = this.canvas.getContext("2d");

    // get phone size
    let phoneHeight = window.innerHeight;
    let phoneWidth = window.innerWidth;

    this.context.canvas.height = phoneHeight;
    this.context.canvas.width = phoneWidth * 0.8;

    handTrack.startVideo(this.video);
  }

  refreshProofPage() {
    window.location.reload();
  }

  send() {

  }

}
