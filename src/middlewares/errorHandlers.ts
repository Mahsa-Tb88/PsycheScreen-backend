import type { NextFunction, Request, Response } from "express";
import mongoose, { MongooseError } from "mongoose";

export default function errorHandler(e: Error, req: Request, res: Response, next: NextFunction) {
  console.log("error...." ,e);


  res.fail("something is wrong!", 500);
}
