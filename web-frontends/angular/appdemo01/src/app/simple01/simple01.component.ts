import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-simple01',
  templateUrl: './simple01.component.html',
  styleUrls: ['./simple01.component.css']
})
export class Simple01Component implements OnInit {

  helloMessage = 'Hello';

  count = 0;

  constructor() { }

  ngOnInit(): void {
    

  }

  onSayHello(){
    console.log('Hello');
  }

  onIncrease() {
    this.count++;
  }

}
