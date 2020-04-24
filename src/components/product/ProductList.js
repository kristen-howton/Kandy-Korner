import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { LocationContext } from "../location/LocationProvider"
import Product from "./Product"
import { ProductTypeContext } from "./ProductTypeProvider"


export default () => {
    const { products } = useContext(ProductContext)
    const { locations } = useContext(LocationContext)
    const { productTypes } = useContext(ProductTypeContext)


    return (
        <div className="products">
            {
                products.map(product => {
                    const matchingLocation = locations.find(location => location.id === product.locationId)
                    const matchingProductType = productTypes.find(productTypes => productTypes.id === product.productTypeId)

                    return <Product key={product.id} product={product}
                        location={matchingLocation} 
                        productType={matchingProductType} />
                            
                })
            }
        </div>
    )
}
