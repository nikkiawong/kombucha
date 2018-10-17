import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kombucha',
  templateUrl: './kombucha.component.html',
  styleUrls: ['./kombucha.component.css']
})
export class Kombucha implements OnInit {

  constructor(public name: string, public brand: string, public price: string, public flavor: string) { }

  ngOnInit() {
  }

  

}
