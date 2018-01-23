import {Router, Request, Response, NextFunction} from 'express';

export class StudentResponseRoute {
    router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.router.get('/', (req: Request, res: Response) => {
            res.send("Student Response returned..");
        })
    }

}

let studentResponseRoute = new StudentResponseRoute();
studentResponseRoute.init();

export default studentResponseRoute.router;