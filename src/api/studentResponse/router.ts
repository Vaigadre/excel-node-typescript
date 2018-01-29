import {Router, Request, Response, NextFunction} from 'express';
import {StudentResponseController} from './controller';

export class StudentResponseRoute {
    router: Router;

    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.router.get('/:id', StudentResponseController.getStudentResponse);
        this.router.post('/', StudentResponseController.setStudentResponse);
    }

}

let studentResponseRoute = new StudentResponseRoute();
studentResponseRoute.init();

export default studentResponseRoute.router;