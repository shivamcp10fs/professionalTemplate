import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', 
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  homeActive:boolean=false;
  featureActive:boolean=false;
  screenshotActive:boolean=false;
  contactActive:boolean=false;
  pricingActive:boolean=false;

  isFixedNavbar:boolean=false;
  title = 'Professional_Template';
  @HostListener('document:scroll ')
  scroll() {
    console.log(document.documentElement.scroll)
    if (document.documentElement.scrollTop > 750 ) {
      this.isFixedNavbar=true;
    } else {
      this.isFixedNavbar=false;

    }
  }
  toNavigate(activeLink: string) {
    document.getElementById(activeLink)?.scrollIntoView();
  }

  ngOnInit(): void {
   
  }
}
