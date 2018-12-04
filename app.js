const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./configuration/swagger')

const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const server = app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`'Listening on port '${server.address().port}`);
});
