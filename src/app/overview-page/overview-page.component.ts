import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Offer } from '../model/offer';
import { OfferProviderService } from '../services/offer-provider.service'

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})

export class OverviewPageComponent implements OnInit {
  offers: Offer[]

  constructor(
    private route: ActivatedRoute,
    private offerProvider: OfferProviderService
  ) {
  }

  ngOnInit(): void {
    let cityID = this.route.snapshot.paramMap.get('id');
    this.offerProvider.offers(cityID)
      .subscribe(offers => this.offers = offers);
  }
}
