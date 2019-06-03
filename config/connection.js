const development = {
  database1: {
    database: "test1",
    username: "root",
    password: "mysql",
    host: "localhost",
    dialect: "mysql"
  }, database2: {
    database: 'test2',
    username: 'root',
    password: 'mysql',
    host: 'localhost',
    dialect: 'mysql',
  }
};

const testing = {
  database1: {
    database: "test",
    username: "root",
    password: "mysql",
    host: "localhost",
    dialect: "mysql"
  }, database2: {
    database: 'test1',
    username: 'root',
    password: 'mysql',
    host: 'localhost',
    dialect: 'mysql',
  }
};

const production = {
  database1: {
    database: "test",
    username: "root",
    password: "mysql",
    host: "localhost",
    dialect: "mysql"
  }, database2: {
    database: 'test1',
    username: 'root',
    password: 'mysql',
    host: 'localhost',
    dialect: 'mysql',
  }
};

module.exports = {
  development,
  testing,
  production,
};
