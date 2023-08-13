import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyfilterService } from './companyfilter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-companyfilter',
  templateUrl: './companyfilter.component.html',
  styleUrls: ['./companyfilter.component.css']
})
export class CompanyfilterComponent implements OnInit {
  item : any = [];
  name:any;
  query :any;
   imagepath : string = environment.imagepath;

  constructor( private service : CompanyfilterService,
              private router : Router,
              ) { 
                this.name = JSON.parse(localStorage.getItem('companyname') || '{}')
               
              }

  ngOnInit(): void {
    this.company();
    this.name = JSON.parse(localStorage.getItem('companyname') || '{}')
    console.log(this.name)
  }

  company(){
    return this.service.company(this.name)
    
    .subscribe( res => {
      //console.log(res)
     this.item = res.rows;
    })
  }

  onSelect(pid:number){
    this.router.navigate(['/productdetailes/' + pid ])
    }
}
