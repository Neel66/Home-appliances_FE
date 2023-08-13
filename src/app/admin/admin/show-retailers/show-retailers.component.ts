import { Component, OnInit } from '@angular/core';
import { ShowretailersService } from './showretailers.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-show-retailers',
  templateUrl: './show-retailers.component.html',
  styleUrls: ['./show-retailers.component.css']
})
export class ShowRetailersComponent implements OnInit {
  retailers:any = []
  constructor(private service : ShowretailersService,
              private message : MessageService) { }

  ngOnInit(): void {
    this.retailer()
  }

  retailer(){
    this.service.retailer()
      .subscribe(res => {
        console.log(res.data)
       this.retailers = res.data
      })
  }
  ondelete(id:any){
    const body = {
      id : id
    }
   return this.service.delete(body)
   .subscribe(res => {
     this.retailer();
     console.log(res);
    // if(res.rowCount === 1){
    // confirm('Are You sure Delete This Account')
    // this.message.setMsg({ msg: 'Delete Successfully', type: 'success' })
    // this.retailer();
    // }
   })
  }
}
