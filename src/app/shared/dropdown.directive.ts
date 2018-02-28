import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
@HostListener('click') toggleOpen() {
  console.log('entering');
  this.isOpen = !this.isOpen;
  console.log('dropdown working');
}
}

