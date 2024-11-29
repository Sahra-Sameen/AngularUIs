import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrdersUIComponent } from './Components/orders-ui/orders-ui.component';
import { DishListingUiComponent } from './Components/dish-listing-ui/dish-listing-ui.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrdersUIComponent, DishListingUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'new-project';
}
