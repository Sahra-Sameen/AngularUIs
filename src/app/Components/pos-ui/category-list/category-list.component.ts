import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  categories = [
    {
      imgUrl: 'assets/Foods/dinein2.png',
      foodName: 'All Menu',
      itemCount: '72 items',
    },
    {
      imgUrl: 'assets/Foods/burger.png',
      foodName: 'Burger',
      itemCount: '12 items',
    },
    {
      imgUrl: 'assets/Foods/juice2.png',
      foodName: 'Juice',
      itemCount: '15 items',
    },
    {
      imgUrl: 'assets/Foods/bento2.png',
      foodName: 'Bento',
      itemCount: '5 items',
    },
    {
      imgUrl: 'assets/Foods/salad2.png',
      foodName: 'Salad',
      itemCount: '7 items',
    },
    {
      imgUrl: 'assets/Foods/tacos.png',
      foodName: 'Tacos',
      itemCount: '9 items',
    },
    {
      imgUrl: 'assets/Foods/sushi.png',
      foodName: 'Sushi',
      itemCount: '10 items',
    },
    {
      imgUrl: 'assets/Foods/oden.png',
      foodName: 'Oden',
      itemCount: '4 items',
    },
    {
      imgUrl: 'assets/Foods/pizza4.png',
      foodName: 'Pizza',
      itemCount: '4 items',
    },  
    {
      imgUrl: 'assets/Foods/dairy.png',
      foodName: 'Dairy',
      itemCount: '7 items',
    },
  ];
}
