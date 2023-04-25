import { Router } from "express";

const routerApi = Router();

routerApi.param('param', async (req, res, next, param) => {
    if(!param){
        next(new Error('Invalid param'))
    }
    //regex go here
    next()
});

routerApi.get('/proof/:param', (req, res) => {
    const param = req.params.param
    res.json(`El parametro es: ${param}`)
});

export default routerApi;