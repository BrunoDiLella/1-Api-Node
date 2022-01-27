import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('shold be able to list all avaible cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'AudiA7',
      description: 'Carro AudiA7',
      brand: 'Audi',
      category_id: '864f4f47-695c-46eb-b36e-ab56f30cf380',
      daily_rate: 115.0,
      fine_amount: 100,
      license_plate: 'DEF-2848',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'AudiA7',
      description: 'Carro AudiA7',
      brand: 'Car_brand_test',
      category_id: '864f4f47-695c-46eb-b36e-ab56f30cf380',
      daily_rate: 115.0,
      fine_amount: 100,
      license_plate: 'DEF-2848',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_brand_test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'AudiA7_teste',
      description: 'Carro AudiA7',
      brand: 'Car_brand_test',
      category_id: '864f4f47-695c-46eb-b36e-ab56f30cf380',
      daily_rate: 115.0,
      fine_amount: 100,
      license_plate: 'DEF-2848',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'AudiA7_teste',
    });

    expect(cars).toEqual([car]);
  });
  it('should be able to list all available cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'AudiA7_teste',
      description: 'Carro AudiA7',
      brand: 'Car_brand_test',
      category_id: '864f4f47-695c-46eb-b36e-ab56f30cf380_teste',
      daily_rate: 115.0,
      fine_amount: 100,
      license_plate: 'DEF-2848',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '864f4f47-695c-46eb-b36e-ab56f30cf380_teste',
    });

    expect(cars).toEqual([car]);
  });
});
