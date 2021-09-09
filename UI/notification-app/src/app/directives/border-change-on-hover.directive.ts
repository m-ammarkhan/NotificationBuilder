import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderChangeOnHover]'
})
export class BorderChangeOnHoverDirective {

  @HostBinding('style.borderColor') borderColor: string = 'transparent';
  @HostBinding('style.borderStyle') borderStyle: string = 'solid';
  @HostBinding('style.borderWidth') borderWidth: string = '1px';
  @HostBinding('style.borderRadius') borderRadius: string = '5px';

  constructor() { }

  /**
   * This will listen to mouse enter/over event and 
   * changes border color to teal on mouseover.
   */
   @HostListener('mouseenter') mouseover(){
    this.borderColor='teal';
  }

  /**
   * This will listen to mouse leave event and 
   * changes border color to transparent on mouseleave.
   */
  @HostListener('mouseleave') mouseleave(){
    this.borderColor='transparent';
  }

}
