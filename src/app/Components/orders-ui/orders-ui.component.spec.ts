import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersUIComponent } from './orders-ui.component';

describe('OrdersUIComponent', () => {
  let component: OrdersUIComponent;
  let fixture: ComponentFixture<OrdersUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
