import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-waiterdetail',
  templateUrl: './waiterdetail.component.html',
  styleUrls: ['./waiterdetail.component.css']
})
export class WaiterdetailComponent implements OnInit {

  records;
  updtPhnNo;
  updtLoc;
  wtrName;
  constructor(private route: ActivatedRoute,
    private waiterService: WaiterService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.records = this.waiterService.getRecords();
    this.wtrName = this.route.snapshot.paramMap.get('waiterName');
    this.records.forEach(element => {
      if (element.waiterName == this.wtrName) {
        this.updtPhnNo = element.phnNo;
        this.updtLoc = element.resLocation;
      }
    });
  }

  save() {
    let records = this.waiterService.getRecords();
    records.forEach(element => {
      if (element.waiterName == this.wtrName) {
        element.phnNo = this.updtPhnNo;
        element.resLocation = this.updtLoc;
        localStorage.setItem("waiters", JSON.stringify(records));
      }
      this.router.navigate(['Owner/Waiters']);
    });
    // this.records = JSON.parse(localStorage.getItem('waiters'));
  }

  goBack(): void {
    this.location.back();
  }

}
