import type { Request, Response } from "express";

export default class AuthController {
  static async activate(req: CodeRequest, res: Response) {
    const q = req.body;
    console.log("phone is..", q);
    res.success("phone number", 200);
  }
}

type CodeRequest = Request<any, any, { phone: number }>;
