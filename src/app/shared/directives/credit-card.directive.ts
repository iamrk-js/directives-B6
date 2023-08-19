import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }
  @HostBinding('style.border') border !: string;
  @HostListener('input', ['$event'])
  onKeyUp(event: Event) {
    let inputControl = event.target as HTMLInputElement;
    let inputval = inputControl.value.replace(/\s+/g, '');
    //  inputval = inputControl.value.replace(/[^a-zA-Z]/g, '');

    if (inputval.length > 16) {
      inputval = inputval.substring(0, 16);
      // inputval.length = 16
    }

    let numbers: Array<string> = [];

    for (let i = 0; i < inputval.length; i += 4) {  // 0 1 2 3, 4 5 6 7
      numbers.push(inputval.substring(i, i + 4))
    }
    console.log(numbers)
    // console.log(numbers.join(" "))
    inputControl.value = numbers.join(' ');

    this.border = '';
    inputControl.nextElementSibling?.classList.add('d-none')
    if (/[^\d]/.test(inputval)) {
      // console.log(/^\d/.test(inputval))
      inputControl.nextElementSibling?.classList.remove('d-none')
      this.border = "2px solid red"
    }


  }
}
