# EatAt

> Scaling codebase & infrastructure to support 10 million entries as opposed to the 100 that this legacy codebase could previously support. This component is the image gallary, my component and database were proxied together with two other components.

## Demo
Sorry no scaled demo is available at this time due to server requirements.

## Photos (Slideshows)
### With Nginx Load Balancer & 5 server cluster
![withlb](../assets/with-lb.gif?raw=true)

### Without load balancer (single node)
![withoutlb](../assets/without-lb.gif?raw=true)

## Related Projects
  - Original: https://github.com/SDC-Tiramisu/Service-Micah

  - https://github.com/SDC-Tiramisu/service-shuwei
  - https://github.com/SDC-Tiramisu/Mentions

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Install across multiple nodes
> Setup database (Scylla or Cassandra)
> Point your nodes at the database
> Setup Nginx on a separate server
> Point Nginx load balancer at each of the nodes
> Your service is deployed

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

