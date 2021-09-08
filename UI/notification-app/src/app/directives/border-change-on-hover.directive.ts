import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderChangeOnHover]'
})
export class BorderChangeOnHoverDirective {

  @HostBinding('style.borderColor') borderColor:string='transparent';
  @HostBinding('style.borderStyle') borderStyle:string='solid';
  @HostBinding('style.borderWidth') borderWidth:string='1px';
  @HostBinding('style.borderRadius') borderRadius:string='5px';
  
  constructor(private elRef:ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.borderColor='teal';
    // this.renderer.setStyle(this.elRef,'background-color','blue');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.borderColor='transparent';
    // this.renderer.setStyle(this.elRef,'background-color','blue');
  }

}
