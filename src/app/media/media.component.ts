import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {

  showOriginalSvg = true;
  showRealFLag = true;

  toggleSvg() {
    this.showOriginalSvg = !this.showOriginalSvg;
  }
  
  toggleFlag() {
    this.showRealFLag = !this.showRealFLag
  }

}
