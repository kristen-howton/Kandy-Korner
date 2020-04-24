import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import ProductList from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeProvider } from "./product/ProductTypeProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"

export default () => (
    <>
        <ProductProvider>
            <ProductTypeProvider>
                <EmployeeProvider>
                  <LocationProvider>
                        <LocationList />
                        <ProductList />
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </ProductTypeProvider>
        </ProductProvider>
    </>
)
