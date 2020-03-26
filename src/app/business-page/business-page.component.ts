import { Component, OnInit } from '@angular/core';

import { EMAIL_ADDRESS } from '../model/global';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.css']
})
export class BusinessPageComponent implements OnInit {
  emailAddress: string

  constructor() {
    this.emailAddress = EMAIL_ADDRESS
  }

  ngOnInit(): void {
  }
}
