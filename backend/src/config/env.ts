const env = {
  dbHost: process.env.DB_SQL_HOST,
  dbUserName: process.env.DB_SQL_USERNAME as string,
  dbPort: Number(process.env.DB_SQL_PORT),
  dbPassword: process.env.DB_SQL_PASSWORD,
  dbDataBaseName: process.env.DB_SQL_DATABASENAME as string,
  dbDialect: process.env.DB_SQL_DIALECT,
  appPort: Number(process.env.PORT_DEV),
  clientAppUrl: process.env.CLIENT_DOMAIN,
};

if (process.env.NODE_ENV === 'test') {
  env.dbDataBaseName = process.env.DB_SQL_DATABASENAME_TESTS as string;
  env.appPort = Number(process.env.PORT_TESTS);
}

export default env;
