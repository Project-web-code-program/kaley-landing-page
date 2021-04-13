import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  openModalDetail = false;
  isMobile = false;
  screenWidth: number;
  contentImage = {imgLeft: '', imgRight: ''};

  constructor() {
    this.screenWidth = 0;
  }

  ngOnInit(): void {
    this.isMobile = (window.innerWidth < 768) ? true : false;
    this.screenWidth = window.innerWidth;

    if (this.isMobile) {
      $('.products-inner-card-section').not('.slick-initialized').slick({
        centerMode: true,
        slidesToShow: 1,
        infinite: false,
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 424, // 425
            settings: { centerPadding: '105px' }
          },
          {
            breakpoint: 413, // 414
            settings: { centerPadding: '100px' }
          },
          {
            breakpoint: 410, // 411
            settings: { centerPadding: '97px' }
          },
          {
            breakpoint: 374, // 375
            settings: { centerPadding: '80px' }
          },
          {
            breakpoint: 359, // 360
            settings: { centerPadding: '73px' }
          },
          {
            breakpoint: 319, // 320
            settings: { centerPadding: '53px' }
          }
        ]
      });
    }
  }

  openDialog(typeProduct: string): void {
    if (typeProduct === 'pineapple') {
      this.contentImage.imgLeft = 'assets/images/pineapple-detail-left.png';
      this.contentImage.imgRight = 'assets/images/pineapple-detail-right.png';
    } else if (typeProduct === 'tofu') {
      this.contentImage.imgLeft = 'assets/images/tofu-detail-left.png';
      this.contentImage.imgRight = 'assets/images/tofu-detail-right.png';
    } else if (typeProduct === 'watermelon1') {
      this.contentImage.imgLeft = 'assets/images/watermelon1-detail-left.png';
      this.contentImage.imgRight = 'assets/images/watermelon1-detail-right.png';
    } else if (typeProduct === 'watermelon2') {
      this.contentImage.imgLeft = 'assets/images/watermelon2-detail-left.png';
      this.contentImage.imgRight = 'assets/images/watermelon2-detail-right.png';
    } else if (typeProduct === 'watermelon3') {
      this.contentImage.imgLeft = 'assets/images/watermelon3-detail-left.png';
      this.contentImage.imgRight = 'assets/images/watermelon3-detail-right.png';
    }

    this.openModalDetail = true;
  }

  getRespDialog(resp: any): void {
    if (resp === 'close') {
      this.openModalDetail = false;
    }
  }

}
