import { Component, OnInit } from '@angular/core';

import { City } from '../model/city';
import { APP_NAME } from '../model/global';
import { CityProviderService } from '../services/city-provider.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  appName: string
  cities: City[]
  public POSTAL_CODE: any


  constructor(
    private cityProvider: CityProviderService
  ) {
    this.appName = APP_NAME
  }

  ngOnInit(): void {
    this.cityProvider.cities()
      .subscribe(cities => this.cities = cities)
  }

  searchCities(){
    console.log('serach hereee:::'),
    console.log('value:::: ',this.POSTAL_CODE);
    if(this.POSTAL_CODE != null && this.POSTAL_CODE != undefined && this.POSTAL_CODE != ''){
    console.log('dddddd')
    this.cityProvider.searchCities(this.POSTAL_CODE)
    .subscribe(cities => {
    this.cities = cities;
    console.log('citeissss:::: ',this.cities)
    }, error => {
    
    })
    }else{
    console.log('elseeee')
    this.cityProvider.cities()
    .subscribe(cities => this.cities = cities)
    }
    }
}
