import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  changeSpeed(speed: number): void {
    if (this.videoPlayer.nativeElement instanceof HTMLVideoElement) {
      this.videoPlayer.nativeElement.playbackRate = speed;
    }
  }
}
