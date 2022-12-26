import * as winston from 'winston';
import config from './config';

const customFormat = winston.format((info: any) => {
  info.message = `${new Date().toISOString()} ${info.message}`;
  return info;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: config.nodeEnv === 'development' ? 'debug' : 'info',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.File({
      level: 'info',
      handleExceptions: true,
      format: winston.format.combine(customFormat(), winston.format.simple()),
      maxsize: 5120000, // 5 Mb.
      maxFiles: 5,
      filename: `${__dirname}/../logs/auth.log`
    })
  ]
});

export default logger;
