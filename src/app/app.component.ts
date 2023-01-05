import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showButton:boolean=false
  isFixedNavbar:boolean=false;
  title = 'Professional_Template';
  @HostListener('document:scroll ')
  scroll() {
    if (document.documentElement.scrollTop > 500 ) {
      this.showButton = true;
      this.isFixedNavbar=true;
    } else {
      this.showButton = false;
      this.isFixedNavbar=false;

    }
    // console.log(document.documentElement.scrollTop)
  }
  scrollToTop(){

    document.body.scrollTop = document.documentElement.scrollTop = 0;

  }

}
