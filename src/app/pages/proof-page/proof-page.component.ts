import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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

  startPredicting() {
    setInterval( () => {
      this.model.detect(this.video)
        .then((predictions: any) => {
          console.log(predictions);
        })
    }, 100);

  }

  async ngOnInit() {
    this.model = await handTrack.load(this.defaultParams);
    this.video = document.getElementById('videoid');
    handTrack.startVideo(this.video);
  }

}
