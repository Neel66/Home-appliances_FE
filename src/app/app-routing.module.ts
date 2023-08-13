import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductdetailesComponent } from './user/productdetailes/productdetailes.component';
import { AddtocartComponent } from './user/addtocart/addtocart.component';
import { CategoryfilterComponent } from './user/categoryfilter/categoryfilter.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { CompanyfilterComponent } from './user/companyfilter/companyfilter.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { ComplainComponent } from './user/complain/complain.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { OrderHistoryComponent } from './user/order-history/order-history.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { PaymentComponent } from './user/payment/payment.component';
import { NavbarComponent } from './user/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user/login', component: LoginComponent},
  { path: 'dashboard/products', component: DashboardComponent },
  { path: 'userhome', component: UserHomeComponent , canActivate: [AuthGuard]},
  { path: 'user/signup', component: SignUpComponent },
  { path: 'productdetailes/:id', component: ProductdetailesComponent,canActivate: [AuthGuard]},
  { path : 'addtocart', component: AddtocartComponent, canActivate: [AuthGuard]},
  { path:'categoryfilter', component: CategoryfilterComponent, canActivate: [AuthGuard]},
  { path: 'orderAddress/:id', component: CheckoutComponent, canActivate: [AuthGuard]},
  { path: 'companyfilter', component: CompanyfilterComponent,canActivate: [AuthGuard]},
  { path: 'sidebar', component: SidebarComponent,canActivate: [AuthGuard]},
  { path: 'complain', component: ComplainComponent,canActivate: [AuthGuard]},
  { path: 'forgotpasswoed', component: ForgotpasswordComponent},
  { path : 'userprofile', component: UserprofileComponent,canActivate: [AuthGuard]},
  { path: 'orderhistory', component: OrderHistoryComponent, canActivate: [AuthGuard]},
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard]},
  { path : 'nav', component : NavbarComponent},
  // admin Routing
  {
    path: 'admin',
    //component: AdminComponent,
  
    loadChildren: () =>
      import('./admin/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: 'user/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
