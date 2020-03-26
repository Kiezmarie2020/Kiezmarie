import { Component, OnInit } from '@angular/core';

import { CAPITALIZED_APP_NAME, DOMAIN_NAME, EMAIL_ADDRESS } from '../model/global';

@Component({
  selector: 'app-agb-page',
  templateUrl: './agb-page.component.html',
  styleUrls: ['./agb-page.component.css']
})
export class AgbPageComponent implements OnInit {
  capitalizedAppName: string
  domainName: string
  emailAddress: string

  constructor() {
    this.capitalizedAppName = CAPITALIZED_APP_NAME
    this.domainName = DOMAIN_NAME
    this.emailAddress = EMAIL_ADDRESS
  }

  ngOnInit(): void {
  }

}
