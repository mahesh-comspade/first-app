import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  records;
  status;
  status1;
  constructor(public waiterService: WaiterService) { }

  ngOnInit() {
    this.load();
  }
  load(){
    this.records = this.waiterService.getRecords();
    if (this.records.length == 0) {
      this.status1 = "No waiters available";
    }
    if (this.records == null) {
      this.status1 = 'Null';
    }
  }
  add(waiter){
    this.records = this.waiterService.add(waiter);
  }

  delete(waiter){
    this.records = this.waiterService.delete(waiter);
  }
}
