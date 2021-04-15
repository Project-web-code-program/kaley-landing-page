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
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  // tslint:disable-next-line:typedef
  onResize(event?: any) {
    this.isMobile = (event.target.innerWidth < 768) ? true : false;
    if (this.isMobile) {
      $('.testimony-card-section').not('.slick-initialized').slick({
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<img src="assets/images/arrow-left-testimony.png">',
        nextArrow: '<img src="assets/images/arrow-right-testimony.png">'
      });
      this.screenWidth = window.innerWidth;
    }
  }

  constructor() {
    this.screenWidth = 0;
  }

  ngOnInit(): void {
    this.isMobile = (window.innerWidth < 768) ? true : false;
    this.screenWidth = window.innerWidth;

    if (this.isMobile) {
      $('.testimony-card-section').not('.slick-initialized').slick({
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<img src="assets/images/arrow-left-testimony.png" width="24" height="24">',
        nextArrow: '<img src="assets/images/arrow-right-testimony.png" width="24" height="24">'
      });

      // handle scroll horizontal move automatically at product card section
      // setInterval(() => {
      //   const scrollLeftProductSection = $('.products-card-section').scrollLeft();
      //   let standardPx = 0;
      //   let standardScrollLeft = '';

      //   if (this.screenWidth >= 376 && this.screenWidth <= 425) {
      //     standardPx = 685; standardScrollLeft = '+=150px';
      //   } else if (this.screenWidth >= 321 && this.screenWidth <= 375) {
      //     standardPx = 735; standardScrollLeft = '+=150px';
      //   } else {
      //     standardPx = 700; standardScrollLeft = '+=135px';
      //   }

      //   if (scrollLeftProductSection < standardPx) {
      //     $('.products-card-section').animate({
      //       scrollLeft: standardScrollLeft
      //     }, 500);
      //   }
      //   if (scrollLeftProductSection >= standardPx) {
      //     $('.products-card-section').delay(400).animate({
      //       scrollLeft: 0
      //     }, 500);
      //   }
      // }, 3000);
    }

    // handle navigation to jump section menu
    $('.nav-item').click((event: any) => {
      const section = event.target.getAttribute('data-nav-section');

      if ( $('[data-section="' + section + '"]').length ) {
        $('html, body').animate({
          scrollTop: $('[data-section="' + section + '"]').offset().top - 55
        }, 500);
      }
    });

    // handle scroll set class active navigation
    $(window).scroll(() => {
      const scrollHeight = $(window).scrollTop() + 186;
      const aboutOffset   = $('.about-section').offset().top;
      const valuesOffset  = $('.values-section').offset().top;
      const productOffset = $('.products-section').offset().top;
      const benefitOffset = $('.benefit-section').offset().top;
      const faqOffset     = $('.faq-section').offset().top;
      const footerOffset  = $('.footer-section').offset().top;

      const originalColor = '#333333';
      const activeColor = '#27AE60';

      $('.nav-list .nav-item').css({color: originalColor});
      if (scrollHeight >= aboutOffset && scrollHeight < valuesOffset) {
        $('.nav-item:nth-child(1)').css({color: activeColor});
      }
      if (scrollHeight >= valuesOffset && scrollHeight < productOffset) {
        $('.nav-item:nth-child(2)').css({color: activeColor});
      }
      if (scrollHeight >= productOffset && scrollHeight < benefitOffset) {
        $('.nav-item:nth-child(3)').css({color: activeColor});
      }
      if (scrollHeight >= faqOffset && scrollHeight < footerOffset) {
        $('.nav-item:nth-child(4)').css({color: activeColor});
      }
    });

  }

  bindingTestimonyHtml(triger: string): string {
    let finalHtml = '';
    if (triger === 'ta1') {
      finalHtml = (this.isMobile) ?
        `“Top markotop pokoknya. Aku<br>udah mau habis dua botol pake<br>serum nanas ini.
        Pokoknya apa<br>yang di klaim sama produknya,<br>beneran terbukti deh. Mantul<br>wangi nya enak, mudah di<br>aplikasiin
        ke muka. Cepat nyerap<br>juga jadi nyaman untuk dibawa<br>tidur di malam hari. Loveeeeeeee<br>pokoknyaaa.”`
        :
        `“Top markotop pokoknya. Aku udah mau habis dua botol pake serum nanas ini.
        Pokoknya apa yang di klaim sama produknya, beneran terbukti deh. Mantul wangi nya enak, mudah di aplikasiin
        ke muka. Cepat nyerap juga jadi nyaman untuk dibawa tidur di malam hari. Loveeeeeeee pokoknyaaa.”`;
    } else if (triger === 'ta2') {
      finalHtml = (this.isMobile) ?
        `“So far ini adalah sleeping mask<br>terbaik yang pernah aku coba.<br>Wanginya enakkkkkkk<br>bangetttttt!
        Teksturnya thick<br>kayak sleeping mask pada<br>umumnya. Beberapa menit awal<br>pemakaian terasa greasy, tapi<br>setelahnya meresap banget.<br>
        Nyaman banget dipakai tidur,<br>terutama buat yang kamarnya<br>tanpa AC. Pas bangun, kulit<br>terasa lebih plump, kenyal-kenyal<br>gitu.”`
        :
        `“So far ini adalah sleeping mask terbaik yang pernah aku coba. Wanginya enakkkkkkk bangetttttt!
        Teksturnya thick kayak sleeping mask pada umumnya. Beberapa menit awal pemakaian terasa greasy, tapi setelahnya meresap banget. Nyaman
        banget dipakai tidur, terutama buat yang kamarnya tanpa AC. Pas bangun, kulit terasa lebih plump, kenyal-kenyal gitu.”`;
    } else if (triger === 'ta3') {
      finalHtml = (this.isMobile) ?
        `“Enak banget bener-bener<br>chalming jerawat dan bruntusan.<br>
        awal-awal waktu masih<br>bruntusan tuh ada sensasi<br>cekit-cekitnya,
        tapi pas<br>bruntusannya udah membaik<br>udah nggak cekit-cekit lagi,<br>bener-bener nenangin dan<br>adeeeem.
        Produk ini cocok<br>banget buat pemalas kayak aku<br>yang masker tinggal ngaduk aja<br>aku males hahahaha.”`
        :
        `“Enak banget bener-bener chalming jerawat dan bruntusan.
        awal-awal waktu masih bruntusan tuh ada sensasi cekit-cekitnya,
        tapi pas bruntusannya udah membaik udah nggak cekit-cekit lagi, bener-bener nenangin dan adeeeem.
        Produk ini cocok banget buat pemalas kayak aku yang masker tinggal ngaduk aja aku males hahahaha.”`;
    }
    return finalHtml;
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

  openTestimonyUrl(url: string): void {
    window.open(url, '_blank');
  }

  openWhatsapp(): void {
    window.open('https://api.whatsapp.com/send?phone=6285779800933&text=Hai%20Admin%20Kaley', '_blank');
  }

}
