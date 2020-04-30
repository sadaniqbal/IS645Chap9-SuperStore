import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { HttpClientModule } from "@angular/common/http";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    Cart,
    Order,
    OrderRepository,
    AuthService,
  ],
})
export class ModelModule {}
