import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { SigninComponent } from './signin/signin.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowRetailersComponent } from './show-retailers/show-retailers.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddretailerComponent } from './addretailer/addretailer.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComplainComponent } from './complain/complain.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { SearchPipe } from './all-products/search.pipe';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OrdermanagementComponent } from './ordermanagement/ordermanagement.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    declarations: [
        AdminComponent,
        SigninComponent,
        AllProductsComponent,
        AddProductComponent,
        HomepageComponent,
        ShowRetailersComponent,
        EditProductComponent,
        AddretailerComponent,
        ShowusersComponent,
        AdduserComponent,
        NavbarComponent,
        ComplainComponent,
        ShowOrdersComponent,
        SearchPipe,
        ForgotpasswordComponent,
        OrdermanagementComponent,
        
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        NgxPaginationModule,
        PaginationModule,
        TabsModule
    ],
    exports:[
    AdminComponent        
    ],
    providers: [],
    bootstrap: [AdminComponent]
  })
  export class AdminModule { }