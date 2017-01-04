module.exports = {
  open: false,
  logLevel: "silent",
  server: {
    middleware: {
      0: null // removes default `connect-logger` middleware
    }
  }
};
