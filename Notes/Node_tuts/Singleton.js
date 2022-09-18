class Mylogger {
  constructor() {
    if (Mylogger.instance == null) {
      this.logs = [];
      Mylogger.instance = this;
    }
    return Mylogger.instance;
  }
  getAllLogs() {
    if (this.logs && this.logs.length) {
      this.logs.forEach((log) => console.log(log));
      return;
    }
    console.log('Currently no logs to display!.');
  }
  log(data) {
    this.logs.push(data);
    console.log('Log:-->', data);
  }
  printLogsCount() {
    console.log(`${this.logs.length} Log(s) Count.`);
  }
}

const logger = new Mylogger();
Object.freeze(logger);
export default logger;
