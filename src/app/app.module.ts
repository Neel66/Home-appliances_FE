import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginService } from './user/login/login.service';

import { GlobalAlertComponent } from './shared/global-alert/global-alert.component';

import { FooterComponent } from './user/footer/footer.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminModule } from './admin/admin/admin.module';
import { NavbarComponent } from './user/navbar/navbar.component';
import { ProductdetailesComponent } from './user/productdetailes/productdetailes.component';
import { AddtocartComponent } from './user/addtocart/addtocart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { CategoryfilterComponent } from './user/categoryfilter/categoryfilter.component';
import { SearchComponent } from './user/search/search.component';
import { ProductnamePipe } from './pipes/productname.pipe';
import { ProductdetailesPipe } from './pipes/productdetailes.pipe';
import { DetailesslicePipe } from './pipes/detailesslice.pipe';
import { CompanyfilterComponent } from './user/companyfilter/companyfilter.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComplainComponent } from './user/complain/complain.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { OrderHistoryComponent } from './user/order-history/order-history.component';
import { AuthGuard } from './auth/auth.guard';
import { PaymentComponent } from './user/payment/payment.component';
import { OrderhistoryService } from './user/order-history/orderhistory.service';
import { ComplainService } from './user/complain/complain.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    DashboardComponent,
    GlobalAlertComponent,
  
    FooterComponent,
    UserHomeComponent,
    NavbarComponent,
    ProductdetailesComponent,
    AddtocartComponent,
    CheckoutComponent,
    CategoryfilterComponent,
    SearchComponent,
    ProductnamePipe,
    ProductdetailesPipe,
    DetailesslicePipe,
    CompanyfilterComponent,
    SidebarComponent,
    ComplainComponent,
    ForgotpasswordComponent,
    UserprofileComponent,
    OrderHistoryComponent,
    PaymentComponent
  ],
  imports: [
    //BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    TabsModule,
    CarouselModule.forRoot()
  ],
  providers: [LoginService, AuthGuard,OrderhistoryService,ComplainService ,HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
