import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';

import { GlobalService } from './globals.service';
import { NavbarService } from "./navbar.service";
import { ItemService } from "./item.service";
import { WaiterService } from './waiter.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerComponent } from './owner/owner.component';
import { WaiterComponent } from './waiter/waiter.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { WaiterdetailComponent } from './waiterdetail/waiterdetail.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    OwnerComponent,
    WaiterComponent,
    HeaderComponent,
    ItemsComponent,
    ItemdetailComponent,
    WaiterdetailComponent,
    WaiterLoginComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GlobalService, NavbarService, ItemService, WaiterService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
