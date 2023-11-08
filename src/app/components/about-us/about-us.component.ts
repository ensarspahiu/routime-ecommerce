import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {


  ngAfterViewInit(){
    const options = {
      root: null,
      rootMargin: '0px',
    };
    const title = document.querySelectorAll('.title')
    const teutaText = document.querySelectorAll('.teuta-text')

    const observer: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
      });
    },{
      threshold: 0.3,
    });
    title.forEach(title => {
      observer.observe(title)
    })
    const observer2: IntersectionObserver = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('show',entry.isIntersecting)
      });
    },{
      threshold: 0.3,
    });
    teutaText.forEach(teutaText => {
      observer2.observe(teutaText)
    })
  }

}
