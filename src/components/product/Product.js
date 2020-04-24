import React from "react"

export default ({product, location}) => (
    <section className="product">
        <h3 className="product__name">{product.name} cost ${product.price}.00</h3>
        {/* <div className="product__type">{product.productTypeId}</div> */}
        <div className="product__location">{location.address}</div>
    </section>
)