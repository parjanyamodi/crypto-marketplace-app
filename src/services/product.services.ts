import Product from "../models/product.models";

const getAllProducts = async () => {
    try {
        const products = await Product.find({});
        return products
    } catch (error) {
        throw new Error(error)
    }
};

const getProductById = async (identifer: string) => {
    try {
        const product = await Product.findById(identifer);
        return product
    } catch (error) {
        throw new Error(error)

    }
};

const createProduct = async (productDetails: object) => {
    try {
        const product = await Product.create(productDetails);
        return product
    } catch (error) {
        throw new Error(error)

    }
};

const updateProduct = async (identifer: string, productDetails: object) => {
    try {
        const newProduct = await Product.findOneAndUpdate({
            _id: identifer
        },
            productDetails,
            { new: true }
        )
        return newProduct
    } catch (error) {
        throw new Error(error)

    }
};

const deleteProduct = async (identifer: string) => {
    try {
        const product = await Product.findByIdAndRemove(identifer);
        return product
    } catch (error) {
        throw new Error(error)
    }
};
export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct }