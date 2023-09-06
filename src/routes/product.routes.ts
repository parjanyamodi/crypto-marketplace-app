import productControllers from "../controllers/product.controllers";
import authCheck from "../helpers/authMiddleware";
const productRoutes = async (router: any) => {
    router.get("/products", authCheck, productControllers.getAllProducts)
    router.get("/product/:id", authCheck, productControllers.getProductById)
    router.post("/product", authCheck, productControllers.createProduct)
    router.put("/product/:id", authCheck, productControllers.updateProduct)
    router.delete("/product/:id", authCheck, productControllers.deleteProduct)
}

export default productRoutes