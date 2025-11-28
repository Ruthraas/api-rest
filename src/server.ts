import express, { NextFunction, Response, Request } from "express";
import { ZodError } from "zod";

import { routes } from "./routes";
import { AppError } from "./utils/app-error";

const PORT = 3333;

const app = express();

app.use(express.json());

app.use(routes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return res
      .status(400)
      .json({ message: "Validation Error", issues: error.format() });
  }

  res.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server is running ${PORT}`));
