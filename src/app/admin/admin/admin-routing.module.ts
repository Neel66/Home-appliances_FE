import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ShowRetailersComponent } from './show-retailers/show-retailers.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddretailerComponent } from './addretailer/addretailer.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ComplainComponent } from './complain/complain.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AdminGuard } from 'src/app/auth/admin.guard';
import { OrdermanagementComponent } from './ordermanagement/ordermanagement.component';

const routes: Routes = [
    { path: '', component: SigninComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'addproduct', component: AddProductComponent, canActivate: [AdminGuard]},
    { path: 'homepage', component: HomepageComponent, canActivate: [AdminGuard]},
    { path: 'allproduct', component: AllProductsComponent, canActivate: [AdminGuard]},
    { path: 'retailers', component: ShowRetailersComponent, canActivate: [AdminGuard]},
    { path: 'editproduct/:id', component: EditProductComponent, canActivate: [AdminGuard]},
    { path: 'addretailer', component: AddretailerComponent, canActivate: [AdminGuard]},
    { path: 'showusers', component: ShowusersComponent, canActivate: [AdminGuard]},
    { path: 'adduser', component: AdduserComponent, canActivate: [AdminGuard]},
    { path : 'complain', component: ComplainComponent, canActivate: [AdminGuard]},
    { path : 'showorders', component: ShowOrdersComponent, canActivate: [AdminGuard]},
    { path : 'forgotpassword', component : ForgotpasswordComponent},
    { path: 'ordermanagement', component: OrdermanagementComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }