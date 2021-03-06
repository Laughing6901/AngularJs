import { TestBed } from '@angular/core/testing';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from './dish.service';

describe('DishService', () => {
  let service: DishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
