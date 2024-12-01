import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  orders = [
    {
      table: 'T7',
      customer: 'Mr.Willy',
      orderId: '#225',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: '2 Items',
      BgColor: '#76FF03',
    },
    {
      table: 'T7',
      customer: 'Mr.Willy',
      orderId: '#225',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: '2 Items',
      BgColor: '#76FF03',
    },
    {
      table: 'T7',
      customer: 'Mr.Willy',
      orderId: '#225',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: '2 Items',
      BgColor: '#76FF03',
    },
    {
      table: 'T7',
      customer: 'Mr.Willy',
      orderId: '#225',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: '2 Items',
      BgColor: '#76FF03',
    },
    {
      table: 'T7',
      customer: 'Mr.Willy',
      orderId: '#225',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: '2 Items',
      BgColor: '#76FF03',
    },
    {
      table: 'T7',
      customer: 'Mr.Willy',
      orderId: '#225',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: '2 Items',
      BgColor: '#76FF03',
    },
    {
      table: 'T7',
      customer: 'Mr.Willy',
      orderId: '#225',
      status: 'Ready',
      statusMessage: 'Ready to Serve',
      items: '2 Items',
      BgColor: '#76FF03',
    },
    
  ];
}
