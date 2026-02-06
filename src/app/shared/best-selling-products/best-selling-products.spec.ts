import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingProducts } from './best-selling-products';

describe('BestSellingProducts', () => {
  let component: BestSellingProducts;
  let fixture: ComponentFixture<BestSellingProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
