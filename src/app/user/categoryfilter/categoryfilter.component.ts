import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoryfilter',
  templateUrl: './categoryfilter.component.html',
  styleUrls: ['./categoryfilter.component.css']
})
export class CategoryfilterComponent implements OnInit {
   item : any = [];
   name : any;
   query :any;
   imagepath : string = environment.imagepath;

    constructor(private service : FilterService, private router : Router) { 
    this.name = JSON.parse(localStorage.getItem('productname') || '{}')
  }

  ngOnInit(): void {
    this. productname();
  }

  productname(){
    return this.service.productsname(this.name)
    .subscribe(res => {
      console.log('filter', res)
      this.item = res.rows
    })
  }

  onSelect(pid:number){
    this.router.navigate(['/productdetailes/' + pid ])
    }
}
