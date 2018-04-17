import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

import { ItemService } from "../item.service";

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {
  records;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location,
    private router: Router
  ) { 
  }
  updtPrice;
  itemName;
  ngOnInit() {
    this.load();
  }

  load(){
    this.records = this.itemService.getItems();
    this.itemName = this.route.snapshot.paramMap.get('itemName');
    this.records.forEach(element => {
      if (element.itemName == this.itemName) {
        this.updtPrice = element.itemPrice;
      }
    });
  }

  save() {
      this.records = this.itemService.update(this.itemName,this.updtPrice);
      this.router.navigate(['Owner/Items']);
  }

  goBack(): void {
    this.location.back();
  }
}
