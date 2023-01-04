import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showButton:boolean=false
  title = 'Professional_Template';
  @HostListener('document:scroll ')
  scroll() {
    if (document.documentElement.scrollTop > 15) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  scrollToTop(){

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
