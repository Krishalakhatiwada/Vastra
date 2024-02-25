const express = require("express");
const app = express();

const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "src", "public")));

app.use(express.json());//middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
const routes = require("./src/routes");
app.use("/", routes);
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
