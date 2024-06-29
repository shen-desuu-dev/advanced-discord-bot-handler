const { blue, cyan, green, magenta, red, yellow } = require("colorette");

class Logger {
  currentDate = new Date().toLocaleDateString("ph", { dateStyle: "long" });
  currentTime = new Date().toLocaleTimeString("ph", { timeStyle: "medium" });

  info(message, ...args) {
    return console.log(
      `${cyan(`[ ${this.currentDate} @ ${this.currentTime}]`)} ${message}`,
      ...args
    );
  }

  warn(message, ...args) {
    return console.log(
      `${yellow(`[ ${this.currentDate} @ ${this.currentTime}]`)} ${message}`,
      ...args
    );
  }

  debug(message, ...args) {
    return console.log(
      `${magenta(`[ ${this.currentDate} @ ${this.currentTime}]`)} ${message}`,
      ...args
    );
  }

  error(message, ...args) {
    return console.log(
      `${red(`[ ${this.currentDate} @ ${this.currentTime}]`)} ${message}`,
      ...args
    );
  }

  success(message, ...args) {
    return console.log(
      `${green(`[ ${this.currentDate} @ ${this.currentTime}]`)} ${message}`,
      ...args
    );
  }
}


module.exports = Logger