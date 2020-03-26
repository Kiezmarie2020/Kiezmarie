import { Component, OnInit } from '@angular/core';

import { BUSINESS_NAME, DOMAIN_NAME, WWW_DOMAIN_NAME } from '../model/global';

@Component({
  selector: 'app-impressum-page',
  templateUrl: './impressum-page.component.html',
  styleUrls: ['./impressum-page.component.css']
})
export class ImpressumPageComponent implements OnInit {
  businessName: string
  domainName: string
  wwwDomainName: string

  constructor() {
    this.businessName = BUSINESS_NAME
    this.domainName = DOMAIN_NAME
    this.wwwDomainName = WWW_DOMAIN_NAME
  }

  ngOnInit(): void {
  }
}
