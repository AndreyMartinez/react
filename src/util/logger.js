const global = window
let logEngine = global.console

function prefixMessage(logType,message){
    return `[${logType.toUpperCase()} ${new Date().toTimeString().slice(0, 8)}] ${message}`
}

function _log(logType, message, ...args) {
    logEngine[logType](prefixMessage(logType, message), ...args)
}


  export function log(...args) {
    _log('log', ...args)
  }

  export function warn(...args) {
    _log('warn', ...args)
  }

  export function error(...args) {
    _log('error', ...args)
  }
