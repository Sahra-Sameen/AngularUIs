import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSUIComponent } from './pos-ui.component';

describe('POSUIComponent', () => {
  let component: POSUIComponent;
  let fixture: ComponentFixture<POSUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [POSUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(POSUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
