import express from 'express';
import productRouter from "./router/productRouter"
import userRouter from "./router/userRouter"
import dbConnection from "./config/dbConfig";

const app = express();

dbConnection.then(() => {
    // 미들웨어
    app.use(express.json()); // post body 값 파싱

    // router
    app.use("/user", userRouter)     // user Router
    app.use("/product", productRouter) // product Router

    app.listen(8080, () => {
        console.log(`
            ################################################
            🛡️ Server listening on port: 8080 🛡️
            ################################################
        `);
    });
}).catch(err => {
    console.error("Failed to connect to the database. Server not started.", err);
});
