import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ProductContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }

    const addProducts = product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(getProducts)
    }

    /*
        Load all products when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(
        () => {
            getProducts()
        },
        []
    )

    useEffect(
        () => {
            console.log("****  PRODUCT APPLICATION STATE CHANGED  ****")
        },
        [products]
    )


    return (
        <ProductContext.Provider value={{
            products, addProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}