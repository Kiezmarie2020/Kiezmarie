import { Component, OnInit } from '@angular/core';

import { CAPITALIZED_APP_NAME } from '../model/global';

@Component({
  selector: 'app-voucher-confirmation-page',
  templateUrl: './voucher-confirmation-page.component.html',
  styleUrls: ['./voucher-confirmation-page.component.css']
})
export class VoucherConfirmationPageComponent implements OnInit {
  capitalizedAppName: string

  constructor() {
    this.capitalizedAppName = CAPITALIZED_APP_NAME
  }

  ngOnInit(): void {
  }
}
