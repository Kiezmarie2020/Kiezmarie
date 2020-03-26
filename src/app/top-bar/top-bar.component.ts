import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../model/global';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  appName: string
  isMenuVisible: boolean

  constructor() {
    this.appName = APP_NAME
  }

  ngOnInit(): void {
  }

  showMenu() {
    this.isMenuVisible = true
  }

  hideMenu() {
    this.isMenuVisible = false
  }
}
