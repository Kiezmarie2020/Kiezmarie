import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { DetailViewPageComponent } from './detail-view-page/detail-view-page.component';
import { VoucherOrderPageComponent } from './voucher-order-page/voucher-order-page.component';
import { VoucherConfirmationPageComponent } from './voucher-confirmation-page/voucher-confirmation-page.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ImpressumPageComponent } from './impressum-page/impressum-page.component';
import { AgbPageComponent} from './agb-page/agb-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RevocationPageComponent } from './revocation-page/revocation-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: 'http://' + request.url.split('http://localhost:4200/')[0]
    });
    return next.handle(request);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OverviewPageComponent,
    DetailViewPageComponent,
    VoucherOrderPageComponent,
    VoucherConfirmationPageComponent,
    BottomBarComponent,
    ImpressumPageComponent,
    AgbPageComponent,
    TopBarComponent,
    RevocationPageComponent,
    BusinessPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }