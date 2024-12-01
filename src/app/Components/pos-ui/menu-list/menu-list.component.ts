import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  menuItems = [
    { 
      imageUrl: 'assets/Foods/burger image.jpg',
      foodName: 'Original Meat Burger with Chips',
      price: 19,
    },
    { 
      imageUrl: 'assets/Foods/juice image.jpg',
      foodName: 'Fresh Orange Juice with Basil Seed no Sugar',
      price: 35,
    },
    { 
      imageUrl: 'assets/Foods/pizza Image.jpeg',
      foodName: 'Black Chicken Pizza with Cheese',
      price: 20,
    },
    { 
      imageUrl: 'assets/Foods/tacos image.jpg',
      foodName: 'Tacos Salsa With Chicken Grilled',
      price: 31,
    },
    { 
      imageUrl: 'assets/Foods/burger image.jpg',
      foodName: 'Original Meat Burger with Chips',
      price: 19,
    },
    { 
      imageUrl: 'assets/Foods/juice image.jpg',
      foodName: 'Fresh Orange Juice with Basil Seed no Sugar',
      price: 35,
    },
    { 
      imageUrl: 'assets/Foods/pizza Image.jpeg',
      foodName: 'Black Chicken Pizza with Cheese',
      price: 20,
    },
    { 
      imageUrl: 'assets/Foods/tacos image.jpg',
      foodName: 'Tacos Salsa With Chicken Grilled',
      price: 31,
    },
  ];
}
