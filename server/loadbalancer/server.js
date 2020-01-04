const loadbalancer = require('load-balancers');
const express = require('express');
const proxy = require('http-proxy-middleware');

const PORT = process.env.PORT || 3001;

const app = express();

const proxies = [
  '52.14.254.186:3001',
  '52.14.200.45:3001',
  '18.216.177.145:3001',
  '3.14.13.184:3001',
  '18.216.100.198:3001',
]

const balancer = new loadbalancer.P2cBalancer(proxies.length);

const target = proxies[balancer.pick()];

app.use('/', proxy({ target }));

app.listen(PORT,() => {
  console.log('Proxy Online');
})