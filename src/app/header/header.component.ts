import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
  }

}
