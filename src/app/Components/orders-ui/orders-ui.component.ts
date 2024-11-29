import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-ui',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './orders-ui.component.html',
  styleUrl: './orders-ui.component.scss'
})
export class OrdersUIComponent {
  orders = [
    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },
    
    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },

    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },

    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },

    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },

    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },

    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },

    {
      table: 'A4',
      customer: 'Ariel Hikmat',
      orderId: '#225',
      orderType: 'Dine In',
      date: 'Wed, 6 November 2024',
      time: '06:12 PM',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
      ],
      total: 87.34
    },
  ];
}
