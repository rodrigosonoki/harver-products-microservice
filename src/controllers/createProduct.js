import Product from '../models/Product'
import Sku from '../models/Sku'

export default async function makeCreateProduct(req, res) {
    const { name, description, images, price } = req.body;
    const userId = req.user.id
    

    const skus = [{ size: "S" }, { size: "M" }, { size: "L" }, { size: "XL" }];

    try {
        //CREATE PRODUCT
        const product = await new Product({
            name,
            description,
            images,
            price,
            userId
        });
        product.save();

        //CREATE SKU
        skus.forEach(async function(i) {
            const sku = await new Sku({
                product: product._id,
                size: i.size
            });
            sku.save()
        })
        
        
        return res.status(200).json({ msg: `${name} foi criado com sucesso` });

    } catch(err) {
        return res.status(400).json({ msg: err })
    }
}