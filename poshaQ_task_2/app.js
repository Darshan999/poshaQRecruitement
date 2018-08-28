var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var http = require("http");

var indexRouter = require("./routes/indexRouting");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect(
    "mongodb://localhost:27017/ToDoTask",
    { useNewUrlParser: true }
  )
  .then(connect => {
    //Port
    const port = "3000";
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port, () => console.log(`API running on localhost:${port}`));
  })
  .catch(err => {
    console.log("hey", err.message);
  });

module.exports = app;
