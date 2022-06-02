const system = require('./lib/std/system');

const env = require('./lib/std/env.js');
const conf = require('./lib/std/conf.js');
const log = require('./lib/std/log.js');
const errors = require('./lib/std/errors.js');
const restApi = require('./lib/std/rest-api.js');

process.on('uncaughtException', uncaughtHandler);
process.on('SIGINT', cleanup);
process.on('SIGUSR1', cleanup);
process.on('SIGUSR2', cleanup);

// Инициализация подсистем
(async () => {
  log.info("Инициализация подсистем...");

  system.addReadyPoint('Loading');
  try {
    await env.init();
    await conf.init();
    await log.init();
    await errors.init();
    await restApi.init();

    require('./lib/api-gw');

    log.info(`App starts in ${process.env.NODE_ENV} env`);
    log.info("Инициализация сервиса завершена успешно");
    
    system.setLoaded();
    system.resolveReadyPoint('Loading');
  } catch (err) {
    log.error(`Ошибка при инициализации сервиса:  ${(err.stack || err)}`)
    console.log("Ошибка при инициализации сервиса: " + (err.stack || err));
    cleanup();
  }
})();

function uncaughtHandler(err) {
  if (log) {
    log.error("Необработанная ошибка", err);
  } else {
    console.log(err.stack || err);
  }
}

function cleanup() {
  try {
    log.error("Выполняется остановка микросервиса...")
    console.log("\nВыполняется остановка микросервиса...");
  } catch(err) {
    console.log(err.stack || err);
    log.error("Выполняется остановка микросервиса...")
  }

  setTimeout(function() {
    process.exit(1);
  }, 1000);
}