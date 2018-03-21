import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ItemsComponent } from './views/items/items.component';
import { AddItemComponent } from './views/items/add-item/add-item.component';
import { EditItemComponent } from './views/items/edit-item/edit-item.component';
import { ItemDetailsComponent } from './views/items/item-details/item-details.component';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'details', component:ItemDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ItemsComponent,
    AddItemComponent,
    EditItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
