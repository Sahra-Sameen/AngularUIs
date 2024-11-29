import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'DishListingUiComponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-listing-ui.component.html',
  styleUrl: './dish-listing-ui.component.scss'
})
export class DishListingUiComponent {
  foodItems = [
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'All Dishes', 
      count: 150,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Breakfast', 
      count: 18,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Beef Dishes', 
      count: 25,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Biriyani', 
      count: 8,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Chicken Dishes', 
      count: 50,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Desserts', 
      count: 18,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Dinner', 
      count: 25,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Fast Foods', 
      count: 8,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Drinks', 
      count: 30,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Lunch', 
      count: 18,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Platters', 
      count: 25,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Salads', 
      count: 8,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Side Dishes', 
      count: 25,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Soups', 
      count: 18,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Appertizers', 
      count: 25,
    },
    { 
      imageUrl: 'assets/Food.jpg', 
      category: 'Main Course', 
      count: 8,
    },
  ];

  dessertItem = [
    { 
      imageUrl: 'assets/Desserts/Des1.jpg',
      foodCategory: 'Dessert',
      foodName: 'Strawberry Panna Cotta',
      desCount: 19,
    },
    { 
      imageUrl: 'assets/Desserts/Des2.jpg',
      foodCategory: 'Dessert',
      foodName: 'Vegan Tiramisu With Chocolate Cream',
      desCount: 35,
    },
    { 
      imageUrl: 'assets/Desserts/Des3.jpg',
      foodCategory: 'Dessert',
      foodName: 'Hot Fudge Ice Cream Bar Dessert',
      desCount: 20,
    },
    { 
      imageUrl: 'assets/Desserts/Des4.jpg',
      foodCategory: 'Dessert',
      foodName: 'Ice Cream Sunadae',
      desCount: 31,
    },
    { 
      imageUrl: 'assets/Desserts/Des5.jpg',
      foodCategory: 'Dessert',
      foodName: '4 Layer Delight',
      desCount: 29,
    },
    { 
      imageUrl: 'assets/Desserts/Des6.png',
      foodCategory: 'Dessert',
      foodName: 'Potluck Desserts',
      desCount: 15,
    },
    { 
      imageUrl: 'assets/Desserts/Des7.jpg',
      foodCategory: 'Dessert',
      foodName: 'Rainbow Pudding',
      desCount: 19,
    },
    { 
      imageUrl: 'assets/Desserts/Des8.jpg',
      foodCategory: 'Dessert',
      foodName: 'Mango Cream Dessert With Lime',
      desCount: 25,
    },
  ];
}
