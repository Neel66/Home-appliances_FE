import { Component, OnInit } from '@angular/core';
import { ShowusersService } from './showusers.service';
import { MessageService } from 'src/app/services/message.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination'
@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {
   user:any = []
   err !: boolean;
   currentPage : number = 1;
  page ?: number;
  totalItems ?: any;
  
  constructor( private service:ShowusersService,
              private message : MessageService) { }

  ngOnInit() {
   // this.users()
   this.totalItem();
  }
 
  
  totalItem () {
    return this.service.users(this.page).subscribe (res => {
    console.log('r',res)
    this.totalItems = res.data[0].totalCount[0].count
    this.user = res.data[0].paginatedResults
    })
  }
  pageChanged(event: PageChangedEvent, ) {
    this.page = event.page;
    return this.service.users(event).subscribe( res => {
      console.log(res)
      this.user = res.data[0].paginatedResults
      
    })
  }
// users(){
//   console.log('u', this.page)
// return this.service.users(this.page).subscribe( res => {
//   this.user = res.data
//   console.log(res.data.length)
// })
// }
ondelete(id:number){
  const body = {
    id : id
  }
  return this.service.delete(body)
  .subscribe(res => {
    if(res.status == 1 ){
     // this.users();
    }
    else{
      this.err = true;
    }
   })
}
}
