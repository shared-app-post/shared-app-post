import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

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
  showOriginalSvg = true;
  showRealFLag = true;
  toggleSvg() {
    this.showOriginalSvg = !this.showOriginalSvg;
  }
  
  toggleFlag() {
    this.showRealFLag = !this.showRealFLag
  }


  showOriginalSvgLike = true;
  showRealFLagLike = true;
  toggleSvglike() {
    this.showOriginalSvg = !this.showOriginalSvg;
  }


  showCard = false; // Inicialmente, la tarjeta está oculta

  toggleCard() {
    this.showCard = !this.showCard;
  }
  dropdownVisible: boolean = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  
}
