import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishListingUiComponent } from './dish-listing-ui.component';

describe('DishListingUiComponent', () => {
  let component: DishListingUiComponent;
  let fixture: ComponentFixture<DishListingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishListingUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishListingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
