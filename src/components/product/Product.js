import React from "react"

export default ({product}) => (
    <section className="product">
        <h3 className="product__name">{product.name} cost ${product.price}.00</h3>
        {/* <div className="product__type">{product.productTypeId}</div> */}
        <div className="product__location">{product.locationId}</div>
    </section>
)