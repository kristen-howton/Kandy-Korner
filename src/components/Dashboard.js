import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import ProductList from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeProvider } from "./product/ProductTypeProvider"

export default () => (
    <>
        <ProductProvider>
            <ProductTypeProvider>
                <LocationProvider>
                    <LocationList />
                    <ProductList />
                </LocationProvider>
            </ProductTypeProvider>
        </ProductProvider>
    </>
)