import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { HttpClientModule } from "@angular/common/http";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    Cart,
    Order,
    OrderRepository,
  ],
})
export class ModelModule {}
