import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
  selector: "store",
  templateUrl: "store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(
    public repository: ProductRepository,
    public cart: Cart,
    public router: Router
  ) {}
  searchTerm: string = "";

  match(name: String) {
    const trimmed = this.searchTerm.trim();
    let match = false;
    if (trimmed === "") {
      match = true;
    } else {
      match = name.toLowerCase().indexOf(trimmed.toLowerCase()) !== -1;
    }
    return match;
  }
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .filter(
        (product) => this.match(product.description) || this.match(product.name)
      )
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  }
  AddProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

  //get pageNumbers(): number[] {
  //    return Array(Math.ceil(this.repository
  //        .getProducts(this.selectedCategory).length / this.productsPerPage))
  //            .fill(0).map((x, i) => i + 1);
  //}
}
