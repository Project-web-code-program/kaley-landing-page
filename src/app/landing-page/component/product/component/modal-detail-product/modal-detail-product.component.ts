import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-detail-product',
  templateUrl: './modal-detail-product.component.html',
  styleUrls: ['./modal-detail-product.component.scss']
})
export class ModalDetailProductComponent implements OnInit {

  @Input() contentImage: { imgLeft: string, imgRight: string };
  @Output() closeDialogResp = new EventEmitter<string>();

  constructor() {
    this.contentImage = { imgLeft: '', imgRight: '' };
  }

  ngOnInit(): void { }

  closeDialog(): void {
    this.closeDialogResp.emit('close');
  }

}
