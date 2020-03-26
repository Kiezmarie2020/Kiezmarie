import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Offer } from '../model/offer';
import { OfferProviderService } from '../services/offer-provider.service'

@Component({
  selector: 'app-detail-view-page',
  templateUrl: './detail-view-page.component.html',
  styleUrls: ['./detail-view-page.component.css']
})
export class DetailViewPageComponent implements OnInit {
  offer: Offer

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
}
