import {Router, Response, Request, NextFunction} from 'express';

const router: Router = Router();

router.get('/question', (req:Request, res:Response) =>{
    res.json({'question': "test Question"});
})

export default router;