const winston = require('winston');
const path = require('path');

module.exports = function(module)
{
    var relativePath = path.relative(process.cwd(), module.id);
    return winston.createLogger({

        format: winston.format.combine(
            winston.format.splat(),
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.colorize(),
            winston.format.printf(
                log => {
                    if(log.stack) return `[${log.timestamp}] [${log.level}] [${module.id}] ${log.stack}`;
                    return  `[${log.timestamp}] [${log.level}] [${relativePath}] ${typeof log.message === 'object' && log.message !== null?JSON.stringify(log.message):log.message }`;
                },
            ),
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                level: 'error',
                filename: path.join(__dirname, 'errors.log')
            })
        ],
    })
}