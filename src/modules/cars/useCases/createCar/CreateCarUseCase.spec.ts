import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/appError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Fusca',
      description: 'Carro de luxo',
      daily_rate: 100,
      category_id: '1',
      brand: 'VW',
      fine_amount: 10,
      license_plate: 'ABC-1234',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a car with exists license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Fusca2',
        description: 'Carro de luxo2',
        daily_rate: 100,
        category_id: '12',
        brand: 'VW',
        fine_amount: 10,
        license_plate: 'ABC-1234',
      });

      await createCarUseCase.execute({
        name: 'Fusca',
        description: 'Carro de luxo',
        daily_rate: 100,
        category_id: '1',
        brand: 'VW',
        fine_amount: 10,
        license_plate: 'ABC-1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to create a car withavailable true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: 'Carro de luxo',
      daily_rate: 100,
      category_id: '1',
      brand: 'VW',
      fine_amount: 10,
      license_plate: 'ABC-12354',
    });

    expect(car.available).toBe(true);
  });
});
