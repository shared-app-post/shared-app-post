import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  showOriginalSvg = true;
  showRealFLag = true;

  toggleSvg() {
    this.showOriginalSvg = !this.showOriginalSvg;
  }
  
  toggleFlag() {
    this.showRealFLag = !this.showRealFLag
  }

}
