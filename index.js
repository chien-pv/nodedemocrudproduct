const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let products = [
  {
    id: 1,
    name: "Iphone",
    des: "Iphone 12",
    image: "/images/img-worlds-of-adventure.jpeg",
  },
  {
    id: 2,
    name: "Iphone 12",
    des: "Iphone 124",
    image: "/images/img-worlds-of-adventure.jpeg",
  },
  {
    id: 3,
    name: "Iphone 14",
    des: "Iphone 122224",
    image: "/images/img-worlds-of-adventure.jpeg",
  },
];

app.get("/", (req, res) => {
  res.render("index", { products });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
