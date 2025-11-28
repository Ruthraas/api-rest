import { Request, Response, NextFunction } from "express";

export function myMiddleware(req: Request, res: Response, next: NextFunction) {
    

    req.user_id =  "123456"

    return next()


}
