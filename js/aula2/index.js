const express = require("express");
const app = express();

app.listen(8080);

app.get("/", function(req, res){
  res.send("Home");
});

app.get("/contato", function(req, res){
  res.send("Fale conosco");
});

app.get("/produtos", function(req, res){
  res.send("Lista de produtos");
});

app.get("/reserva", function(req, res){
  res.send("Carrinho vazio");
});