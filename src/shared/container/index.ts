import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/entities/repositories/CarsImagesRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/entities/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/entities/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/entities/repositories/SpecificationsRepository';
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificatiosRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
);
