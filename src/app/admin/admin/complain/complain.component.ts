import { Component, OnInit } from '@angular/core';
import { ComplainService } from './complain.service';
import { MessageService } from 'src/app/services/message.service';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {
   complain : any = [];
   totalLength : any;
  page : number = 1;
  display = "none";
  replys : any;
  re !: boolean;
  err !: boolean;
  subject = new Subject();
  del !: boolean;
  constructor(private service : ComplainService,
              private message : MessageService) { }

  ngOnInit(): void {
    this.complains();
  }

  complains(){
  return this.service.complains()
  .subscribe( res => {
    console.log(res.data)
    this.complain = res.data;
    this.totalLength = res.rowCount;
  })
  }

  ondelete(id:number){
    const body = {
      id : id
    }
  return this.service.delete(body).subscribe(res => {
    if(res.status == 0){
      this.err = true;
    }
    else{
      this.del = true;
      this.complains();
      setTimeout(() => {
        setTimeout(() => {
          this.subject.next(this.del = false)
        }, 3000);
      })
    }
  })
  }

  reply(id:number){
  return this.service.reply(id,this.replys)
  .subscribe( (res) => {
    this.re = true
    if(res.status == 1){
    setTimeout(() => {
      setTimeout(() => {
        this.subject.next(this.re = false)
      }, 3000);
    })
    }
    else{
      this.err = true;
    }
  })
  }
 
  
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}
