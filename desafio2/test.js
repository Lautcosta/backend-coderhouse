const { stringify } = require('querystring');
const Container = require('./index');
const productos = require('./productos');

const nuevoContenedor = new Container('./productos.txt');
nuevoContenedor.save(JSON.stringify(productos));