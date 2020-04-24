import React from "react"

export default ({product, location, productType}) => (
    <section className="product">
        <h3 className="product__name">{product.name} cost ${product.price}.00</h3>
        <div className="product__type">{productType.name}</div>
        <div className="product__location">{location.address}</div>
    </section>
)