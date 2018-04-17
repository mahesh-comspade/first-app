import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';
import { OwnerComponent } from './owner/owner.component';
import { WaiterComponent } from './waiter/waiter.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { WaiterdetailComponent } from './waiterdetail/waiterdetail.component';
import { WaiterLoginComponent } from './waiter-login/waiter-login.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
  // { path: 'Header', component: HeaderComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Admin', component: AdminComponent,
    children: [
      {
        path: 'Owner', component: OwnerComponent,
        children: [
          {
            path: 'Waiters', component: WaiterComponent,
            children: [{ path: 'detail/:waiterName', component: WaiterdetailComponent }]
          },

          {
            path: 'Items', component: ItemsComponent,
            children: [{ path: 'detail/:itemName', component: ItemdetailComponent }]
          },
        ]
      },
      {
        path: 'Items', component: ItemsComponent,
        children: [{ path: 'detail/:itemName', component: ItemdetailComponent }]
      }, 
 ]
  },
  { path: 'waiter-login', component: WaiterLoginComponent },
  { path: 'bill', component: BillComponent },
  { path: 'Owner', component: OwnerComponent,
    children: [
      {
        path: 'Waiters', component: WaiterComponent,
        children: [{ path: 'detail/:waiterName', component: WaiterdetailComponent }]
      },

      {
        path: 'Items', component: ItemsComponent,
        children: [{ path: 'detail/:itemName', component: ItemdetailComponent }]
      },
    ]
  },
  { path: 'Waiters', component: WaiterComponent },
  { path: 'Items', component: ItemsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
