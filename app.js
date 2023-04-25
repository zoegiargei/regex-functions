import express from 'express';
import routerApi from './src/routers/router.api.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(routerApi);

const serverHTTP = app.listen(PORT, () => {'server running on PORT 8080'})