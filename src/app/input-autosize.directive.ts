import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputAutosize]'
})
export class InputAutosizeDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
  ) { }

  @HostListener(':input')
  onInput() {
   this.resize();
  }

  ngOnInit(): void {
    if (this.elementRef.nativeElement.scrollWidth) {
      setTimeout(() => this.resize());
    }
  }

  resize() {
    this.elementRef.nativeElement.style.width = '50px';
    this.elementRef.nativeElement.style.width = this.elementRef.nativeElement.scrollWidth + 'px';
  }
}
