import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {OrdersComponent} from "./components/orders/orders.component";

const routes: Routes = [
  {path:'customer/:name', component: CustomerComponent},
  {path:'orders', component: OrdersComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
