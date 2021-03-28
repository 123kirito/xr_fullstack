import {Request,Response,NextFunction} from 'express';
export const authGard=(req:Request,res:Response,next:NextFunction)=>{
    console.log('验证用户身份！')
    // if(req.user.id){

    // }
    
    next(new Error('UNAUTHORIZED!'))
}