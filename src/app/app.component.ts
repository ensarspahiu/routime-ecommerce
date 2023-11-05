import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routime-ecommerce';

  @ViewChild('test') test: ElementRef | undefined;

  isMenuOpen: boolean = false;

  constructor(private renderer: Renderer2) {}
  adjustBrightness(brightnessValue: number) {
    this.renderer.setStyle(this.test?.nativeElement, 'filter', `brightness(${brightnessValue})`);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen){
      this.adjustBrightness(0.2)
      this.renderer.addClass(document.body, 'no-scroll');
    }else{
      this.adjustBrightness(1)
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}
