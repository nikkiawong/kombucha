import { Component } from '@angular/core';
import { Kombucha } from  './kombucha/kombucha.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kombuchas: Kombucha[] = [
    new Kombucha('Name', 'Brand', 'Price', 'Flavor')
  ];
}
