import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['1.jpg','2.jpg','3.jpg'];
  headline = ['Bring Programierung zu anderer Level ADI', 'du kannts das', 'gibt nie aus']
  currentimage = 0;
  showimage = true;

  ngOnInit(){
    this.updateimage();
  }

  updateimage() {
    setInterval( ()=>{
      this.currentimage++;
      this.currentimage = this.currentimage % this.images.length;
      this.showimage = false;

      setTimeout(()=>{
        this.showimage = true;
      },10)
    },8000)
  }
  
}
