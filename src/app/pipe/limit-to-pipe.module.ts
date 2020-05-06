import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "../store/store.component";
import { RouterModule } from "@angular/router";
import { FilterPipe } from "../pipe/limit-to.pipe";

@NgModule({
  imports: [FilterPipe, ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, FilterPipe],
  exports: [FilterPipe],
})
export class limittopipe {}
