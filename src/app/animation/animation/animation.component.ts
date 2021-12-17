import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate('2500ms ease-in', keyframes([
                  style({transform: 'translateX(-100%) rotateX(0deg)', opacity:0,offset: 0}),
                  style({transform: 'translateX(-100px) rotateX(0deg)',opacity:0,offset: 0.40}),
                  style({transform: 'translateX(-10px) rotateX(0deg)',opacity:0.5,offset: 0.50}),
                  style({transform: 'translateX(25%) rotateX(180deg)',opacity:1,offset: 1})
                ]))
      ]),
      transition(':leave', [
        animate('2500ms ease-out', keyframes([
          style({transform: 'translateX(50%) rotateX(270deg)',opacity:1,offset: 0.50}),
          style({transform: 'translateX(70%) rotateX(320deg)',opacity:1,offset: 0.80}),
          style({ transform: 'translateX(72%) rotateX(360deg)',opacity:0,offset: 1 })
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
    },2500)
  }

  toggleState(){
    this.showText = this.showText == false ? true : false
  }

  ngOnDestroy() {
      clearInterval(this.intvl);
  }

}
