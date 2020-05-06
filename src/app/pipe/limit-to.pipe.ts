import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../model/product.model";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

  constructor() {}

  // public items: any[]; // This is accessible to this entire file
  // public searchText: string[];

  ngOnInit() {}
}
