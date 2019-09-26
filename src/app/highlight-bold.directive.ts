import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBold]'
})
export class HighlightBoldDirective {

  constructor(private elem: ElementRef) { }
  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = 'bold';
  }
}
