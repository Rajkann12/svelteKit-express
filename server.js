
import { handler } from './build/handler.js';
import express from 'express';
import bodyParser from 'body-parser';
import setRouter from './router.js'
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to handle API requests
setRouter(app);

app.use(handler);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
