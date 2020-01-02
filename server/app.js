const createError = require("http-errors");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("./config");
const cors = require("cors");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const applicants = require("./routes/applicants");

const app = express();

// Mongoose things
mongoose.Promise = global.Promise;
let cachedDB = null;
const connectDB = async () => {
  if (cachedDB) return cachedDB;
  const db = await mongoose
    .connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .catch(err => console.log({ error: err.message }));

  cachedDB = db;
  console.log(`mongodb connected: ${db.connection.host}`);
  return db;
};

connectDB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/applicants", applicants);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const PORT = process.env.PORT || 3005;

process.on("unhandledRejection", (err, promise) => {
  if (err)
    return console.log({
      Error: err.message
    });
});

app.listen(PORT, () => {
  console.log(`server started on port:${PORT}`);
});

module.exports = app;
