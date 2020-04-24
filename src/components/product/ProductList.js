import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { LocationContext } from "../location/LocationProvider"
import Product from "./Product"
import "./Product.css"

export default () => {
    const { products } = useContext(ProductContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="products">
        {
            products.map(product => {
                const matchingLocation = locations.find(location => location.id === product.locationId)
               
            return <Product key={product.id} product={product} 
                location={matchingLocation}/> })
        }
        </div>
    )
}
