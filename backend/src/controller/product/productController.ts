import express, {Request, Response, NextFunction} from "express";

/* 상품 목록 조회 */
export const ProductList = (req: Request, res: Response, next:NextFunction): void => {
  res.status(200).send("test");
};
