import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') mouseenter(){
    console.log("qua")
    this.element.nativeElement.style.opacity="1"
  }

  @HostListener('mouseleave') mouseleave(){
    console.log("la")
    this.element.nativeElement.style.opacity="0"
  }





}
