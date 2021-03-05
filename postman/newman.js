const newman = require('newman');

newman
  .run(
    {
      collection: './postman/Upsplash.postman_collection.json',
    },
    (err, summ) => {
      err
        ? console.log(err)
        : console.log(summ.run.executions[0].response.stream.toString());
    }
  )
  .on('request', () => {});
