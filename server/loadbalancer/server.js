const loadbalancer = require('load-balancers');
const express = require('express');
const proxy = require('http-proxy-middleware');

const PORT = process.env.PORT || 3001;

const app = express();

const proxies = [
  '18.224.21.43',
  '3.136.25.186',
  '18.222.248.182',
  '3.16.112.236',
  '3.15.199.38',
]

const balancer = new loadbalancer.P2cBalancer(proxies.length);

const target = proxies[balancer.pick()];

app.use('/', proxy({ target }));

app.listen(PORT,() => {
  console.log('Proxy Online');
})