import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void <=> *',[animate(5000, keyframes([
            style({transform: 'translateX(-100px) rotateX(0deg)'}),
            style({transform: 'translateX(25%) rotateX(90deg)'}),
            style({transform: 'translateX(50%) rotateX(180deg)'}),
            style({transform: 'translateX(75%) rotateX(270deg)'}),
            // style({transform: 'translateX(100%) rotateX(360deg)'})
          ]))
      ]) 
    ]) 
]
})
export class AnimationComponent implements OnInit {

  divArray = new Array(8);
  constructor() { }

  showText:boolean = true

  ngOnInit(){
    setInterval(()=>{
      this.toggleState()
    },6000)
  }

  toggleState(){
    this.showText = this.showText == false ? true : false
  }

}
