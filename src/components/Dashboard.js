import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import ProductList from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"

export default () => (
    <>
        <ProductProvider>
            <LocationProvider>
                <LocationList />
                <ProductList />
            </LocationProvider>
        </ProductProvider>
    </>
)