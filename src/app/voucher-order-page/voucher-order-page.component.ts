import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Offer } from '../model/offer';
import { OfferProviderService } from '../services/offer-provider.service';
import { debuglog } from 'util';

@Component({
  selector: 'app-voucher-order-page',
  templateUrl: './voucher-order-page.component.html',
  styleUrls: ['./voucher-order-page.component.css']
})
export class VoucherOrderPageComponent implements OnInit {
  offer: Offer
  data: string

  constructor(
    private route: ActivatedRoute,
    private offerProvider: OfferProviderService
  ) {
  }

  ngOnInit(): void {
    let offerID = this.route.snapshot.paramMap.get('id');
    this.offerProvider.offer(offerID)
      .subscribe(offer => this.offer = offer);
  }

  amount() {
    return this.data
  }
}
