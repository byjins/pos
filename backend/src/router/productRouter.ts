import express, {Router} from "express";
import {ProductList} from "../controller/product/productController";
import {AuthenticationFilter} from "../util/jwtUtils";

const router: Router = express.Router();

/* MiddleWear */
router.use(AuthenticationFilter);

router.post("/list", ProductList); // 상품 목록 조회

export default router;
