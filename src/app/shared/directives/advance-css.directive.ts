import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceCss]'
})
export class AdvanceCssDirective implements OnInit {

  @Input() hoverColor!: string;
  @Input() classToggleName!:string;
  @HostBinding('style.backgroundColor') bgColor : string = "blueviolet";
  constructor(private eleRef: ElementRef, private rendrer: Renderer2) { }
  ngOnInit(): void {
    // this.rendrer.setStyle(this.eleRef.nativeElement, "background-color", "blueviolet");
    this.rendrer.setStyle(this.eleRef.nativeElement, "color", "#fff");
    this.rendrer.setStyle(this.eleRef.nativeElement, "padding", "10px");
    // this.rendrer.addClass(this.eleRef.nativeElement, "alert ")
    // this.rendrer.addClass(this.eleRef.nativeElement, "alert-info")
  }

  @HostListener('mouseover') onMouseOver() {
    // this.rendrer.setStyle(this.eleRef.nativeElement, "background-color", this.hoverColor)
    this.bgColor = this.hoverColor;
  }

  @HostListener('mouseout') onMouseOut() {
    // this.rendrer.setStyle(this.eleRef.nativeElement, "background-color", "blueviolet");
    this.bgColor = "blueviolet"
  }

}
