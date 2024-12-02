import { Component } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-pos-ui',
  standalone: true,
  imports: [NavbarMenuComponent, OrderListComponent,CategoryListComponent, MenuListComponent, SidebarMenuComponent],
  templateUrl: './pos-ui.component.html',
  styleUrl: './pos-ui.component.scss'
})
export class POSUIComponent {

}
