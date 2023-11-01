import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routime-ecommerce';

  isMenuOpen: boolean = false;

  constructor(private renderer: Renderer2) {
  }
  adjustBrightness(brightnessValue: number) {
    this.renderer.setStyle(document.body, 'filter', `brightness(${brightnessValue})`);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen){
      this.adjustBrightness(0.2)
    }else{
      this.adjustBrightness(1)

    }
  }
}
