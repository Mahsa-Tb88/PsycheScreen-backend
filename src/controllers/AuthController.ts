import type{ CookieOptions, Request, Response } from "express";


export default class AuthController {


  static async activate(req: Request, res: Response) {
    const { phoneNumber } = req.body;
    res.success("phone number",200)


  }

}
