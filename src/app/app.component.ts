import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Professional_Template';
  onNavigate(){
    
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
