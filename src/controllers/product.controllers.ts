import productServices from '../services/product.services';
import { Request, Response } from "express";

type Product = {
    name: string,
    description: string,
    price: number,
}
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: Product[] = await productServices.getAllProducts();
        res.status(200).json({ data: products, message: "Products fetched successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await productServices.getProductById(req.params.id);
        res.status(200).json({ data: product, message: "Product fetched successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await productServices.createProduct(req.body.productDetails);
        res.status(200).json({ data: product, message: "Product created successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = await productServices.updateProduct(req.params.id, req.body.productDetails);
        res.status(200).json({ data: product, message: "Product updated successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await productServices.deleteProduct(req.params.id);
        res.status(200).json({ data: product, message: "Product deleted successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct }