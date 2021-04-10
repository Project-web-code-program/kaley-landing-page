import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  openModalDetail = false;
  contentImage = {imgLeft: '', imgRight: ''};

  constructor() { }

  ngOnInit(): void {
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
