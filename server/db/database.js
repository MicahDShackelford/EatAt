
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'zagat',
});

client.connect()
  .then((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('[Database] Connection Success');
    }
  });

module.exports = client;
