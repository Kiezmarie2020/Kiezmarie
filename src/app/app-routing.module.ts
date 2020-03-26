import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AgbPageComponent } from './agb-page/agb-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { DetailViewPageComponent } from './detail-view-page/detail-view-page.component'
import { ImpressumPageComponent } from './impressum-page/impressum-page.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { OverviewPageComponent } from './overview-page/overview-page.component'
import { RevocationPageComponent } from './revocation-page/revocation-page.component';
import { VoucherConfirmationPageComponent } from './voucher-confirmation-page/voucher-confirmation-page.component';
import { VoucherOrderPageComponent } from './voucher-order-page/voucher-order-page.component';

const routes: Routes = [
  { path: 'about', component: AboutUsPageComponent },
  { path: 'business', component: BusinessPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'confirmation', component: VoucherConfirmationPageComponent },
  { path: 'detail/:id', component: DetailViewPageComponent },
  { path: 'impressum', component: ImpressumPageComponent },
  { path: 'overview/:id', component: OverviewPageComponent },
  { path: 'terms', component: AgbPageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'order/:id', component: VoucherOrderPageComponent },
  { path: 'revocation', component: RevocationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
