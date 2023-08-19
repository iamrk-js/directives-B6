import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowerCase]'
})
export class LowerCaseDirective {

  constructor(private eleRef : ElementRef) { }
  // @HostListener('keyup') onKeyUp() {
  //   let val = this.eleRef.nativeElement.value as string;
  //   this.eleRef.nativeElement.value = val.toLowerCase()
  // }

  @HostListener('input', ['$event'])
  onKeyUp(event : Event){
    let inputControl = event.target as HTMLInputElement;
    let val = inputControl.value as string;
    let result = val.toLowerCase();
    inputControl.value = result;
    console.log(result)
  }
}
