import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faq1 = false; faq2 = false; faq3 = false; faq4 = false; faq5 = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = (event.target.innerWidth < 768) ? true : false;
    if (this.isMobile) {
      $('.testimony-card-section').not('.slick-initialized').slick();
    } else { $('.testimony-card-section').not('.slick-initialized').slick('unslick'); }
  }

  constructor() { }

  ngOnInit(): void {
    this.isMobile = (window.innerWidth < 768) ? true : false;
    // $('.faq-accordion-body').text('ADI GANS');
    if (this.isMobile) {
      $('.testimony-card-section').not('.slick-initialized').slick({
        prevArrow: '<img src="assets/images/arrow-left-testimony.png">',
        nextArrow: '<img src="assets/images/arrow-right-testimony.png">'
      });
    } else { $('.testimony-card-section').not('.slick-initialized').slick('unslick'); }
  }

  onClickFaqHead(numberOfFaq: string): void {
    if (numberOfFaq === '1') {
      this.faq1 = !this.faq1;
      this.faq2 = false; this.faq3 = false; this.faq4 = false; this.faq5 = false;
    }

    if (numberOfFaq === '2') {
      this.faq2 = !this.faq2;
      this.faq1 = false; this.faq3 = false; this.faq4 = false; this.faq5 = false;
    }

    if (numberOfFaq === '3') {
      this.faq3 = !this.faq3;
      this.faq1 = false; this.faq2 = false; this.faq4 = false; this.faq5 = false;
    }

    if (numberOfFaq === '4') {
      this.faq4 = !this.faq4;
      this.faq1 = false; this.faq2 = false; this.faq3 = false; this.faq5 = false;
    }

    if (numberOfFaq === '5') {
      this.faq5 = !this.faq5;
      this.faq1 = false; this.faq2 = false; this.faq3 = false; this.faq4 = false;
    }
  }

}
