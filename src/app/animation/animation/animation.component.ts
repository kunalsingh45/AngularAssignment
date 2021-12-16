import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(-100%)' })),
      transition('void <=> *',[animate("5000ms 0ms ease-in", keyframes([
            style({transform: 'translateX(-100%) rotateX(0deg)',offset: 0}),
            style({transform: 'translateX(25%) rotateX(90deg)',offset: 0.40}),
            style({transform: 'translateX(50%) rotateX(180deg)',offset: 0.50}),
            style({transform: 'translateX(75%) rotateX(270deg)',offset: 0.75}),
            style({transform: 'translateX(100%) rotateX(360deg)',offset: 1})
          ]))
      ]) 
    ]) 
]
})
export class AnimationComponent implements OnInit, OnDestroy {

  divArray = new Array(8);
  intvl: any
  constructor() { }

  showText:boolean = true

  ngOnInit(){
    this.intvl = setInterval(()=>{
      this.toggleState()
    },5200)
  }

  toggleState(){
    this.showText = this.showText == false ? true : false
  }

  ngOnDestroy() {
      clearInterval(this.intvl);
  }

}
