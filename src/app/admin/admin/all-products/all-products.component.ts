import { Component, OnInit } from '@angular/core';
import { AllproductService } from './allproduct.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any = [];
  imagepath: string = environment.imagepath;
  totalLength: any;
  page!: number;
  query: any;

  constructor(
    private service: AllproductService,
    private message: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.product();
    console.log('a', this.page);
  }
  product() {
    return this.service.getproduct().subscribe((res) => {
      console.log('p', this.page);
      this.totalLength = res.rowCount;
      this.products = res.data;
    });
  }
  ondelete(pid: number) {
    const alert = confirm('Are You sure Delete The Product');
    console.log('alert :>> ', alert);
    if (alert) {
      this.service.deleteproduct(pid).subscribe((res) => {
        if (res.status === 1) {
          this.message.setMsg({ msg: 'Delete Successfully', type: 'success' });
          this.product();
        }
      });
    }
  }

  onSelect(pid: number) {
    return this.router.navigate(['/admin/editproduct/' + pid]);
  }
}
