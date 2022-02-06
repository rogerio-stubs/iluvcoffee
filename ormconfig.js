module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nestjs',
  password: 'pass123',
  database: 'nestjs',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
