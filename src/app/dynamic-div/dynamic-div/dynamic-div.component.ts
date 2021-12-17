import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit, OnDestroy {
  dynamicArray = new Array(3);
  count = 0
  clicklistener;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    for (let i = 0; i < this.dynamicArray.length; i++) {
      this.createDynamicDiv(i);
    }
  }


  createDynamicDiv(index) {
    const div = this.renderer.createElement('div');
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText('Click Me');
    // this.renderer.setAttribute(button, 'aria-hidden', 'true');
    this.clicklistener = this.renderer.listen(button, 'click', (evt) => {
      this.generateAlert(index)
     })
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(div, button);
    this.renderer.appendChild(this.el.nativeElement, div);
  }

  generateAlert(index) {
    if (index == 0) {
      alert(`Button in ${index + 1}st div clicked`)
    } else if (index == 1) {
      alert(`Button in ${index + 1}nd div clicked`)
    } else if (index == 2) {
      alert(`Button in ${index + 1}3d div clicked`)
    } else {
      alert(`Button in ${index + 1}th div clicked`)
    }
  }



  ngOnDestroy() {
    this.clicklistener.unsubscribe()
  }

  @HostListener("window:scroll", ['$event'])
  scrollMe(event) {
    this.count++
    if (this.count == 5) {
      this.dynamicArray.push("");
      this.createDynamicDiv(this.dynamicArray.length);
      this.count = 0;
    }
  }
}
