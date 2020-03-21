import { Component, OnInit } from '@angular/core';

import { City } from '../model/city';
import { CityProviderService } from '../services/city-provider.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cities: City[]

  constructor(
    private cityProvider: CityProviderService
  ) {
  }

  ngOnInit(): void {
    this.cityProvider.cities()
      .subscribe(cities => this.cities = cities)
  }
}
