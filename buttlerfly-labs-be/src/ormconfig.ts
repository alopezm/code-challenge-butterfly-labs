import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mysql',
  synchronize: false,
  host: 'localhost',
  port: 3306,
  username: 'butterfly',
  password: 'butterfly',
  database: 'butterfly',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsRun: true,
  logging: true,
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: './migrations',
  },
};

export = config;