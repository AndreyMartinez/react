let logWindow = window.console

function messageElements(logType,message){
    return `[${logType.toUpperCase()} ${new Date().toTimeString().slice(0, 8)}] ${message}`
}

function log(logType, message, ...args) {
    logWindow[logType](messageElements(logType, message), ...args)
}


  export function log(...args) {
    log('log', ...args)
  }
  export function error(...args) {
    log('error', ...args)
  }
  export function warn(...args) {
    log('warn', ...args)
  }

