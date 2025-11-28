import { Request, Response } from "express";

import { AppError } from "../utils/app-Error";

class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query;

    res.send(`Produto ${page} e ${limit}`);
  }

  create(req: Request, res: Response) {
    const { name, price } = req.body;

    if(!name) {
        throw new AppError("O nome do produto ainda não foi cadastrado, cadastre o nome do produto antes de prosseguir!")
    }
    if (name.trim().length < 6) {
        throw new AppError("O nome do poduto tem que ter pelomenos 6 caracteries")
    }
    if(!price) {
        throw new AppError("O preço do produto  ainda não foi cadastrado, cadastre o preço do produto antes de prosseguir!")
    }
    if(price.length < 0){
        throw new AppError("O preço do produto nao pode ser menor que 0")
    }


    res.status(201).json({ name, price, user_id: req.user_id });
  }
}

export { ProductsController };
