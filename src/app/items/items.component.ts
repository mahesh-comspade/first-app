import { Component, OnInit } from '@angular/core';
import { ItemService } from "../item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(public itemservice: ItemService) { }
  records;
  status;
  status1;
  ngOnInit() {
    this.load();
  }
  // status = 'display';
  load(){
    // this.itemservice.getItems();
    this.records = this.itemservice.getItems();
    if (this.records.length == 0) {
      this.status1 = "No items available";
    }
    if (this.records == null) {
      this.status = 'Null';
    }
  }
  add(item): void {
    this.records = this.itemservice.add(item);
  }

  onClick() {
    status = 'none';
  }
  delete(record): void {
    this.records = this.itemservice.delete(record);
  }
}
