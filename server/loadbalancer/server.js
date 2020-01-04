const loadbalancer = require('load-balancers');
const express = require('express');
const proxy = require('http-proxy-middleware');
const httpProxy = require('http-proxy');

const PORT = process.env.PORT || 3001;

const app = express();

const proxies = [
  'http://172.31.23.113:3001/',
  'http://172.31.13.101:3001/',
  'http://172.31.34.65:3001/',
  'http://172.31.39.69:3001/',
  'http://172.31.35.18:3001/',
]

const balancer = new loadbalancer.P2cBalancer(proxies.length);



// app.get('/', (req,res,next) => {
//   return new Promise((resolve,reject) => {
//     let target = proxies[balancer.pick()];
//     resolve(target);
//   }).then((target) => {
//     console.log(target);
//     // httpProxy.createProxyServer({ target });
//     proxymid('/', { target })
//   }).then(() => {
//     res.end();
//   })
// })
app.get('/', (req,res,next) => {
  let target = proxies[balancer.pick()];
  proxy('/', { target });
})

app.listen(PORT,() => {
  console.log('Proxy Online');
})