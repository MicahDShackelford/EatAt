const loadbalancer = require('load-balancers');
const express = require('express');
const proxy = require('http-proxy-middleware');

const PORT = process.env.PORT || 3001;

const app = express();

const proxies = [
  '172.31.23.113:3001',
  '172.31.13.101:3001',
  '172.31.34.65:3001',
  '172.31.39.69:3001',
  '172.31.35.18:3001',
]

const balancer = new loadbalancer.P2cBalancer(proxies.length);

const target = proxies[balancer.pick()];

app.use('/', proxy({ target }));

app.listen(PORT,() => {
  console.log('Proxy Online');
})