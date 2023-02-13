import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextareaAutosize]'
})
export class TextareaAutosizeDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
  ) { }

  @HostListener(':input')
  onInput() {
   this.resize();
  }

  ngOnInit(): void {
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.resize());
    }
  }

  resize() {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }
}
