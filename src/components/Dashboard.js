import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"

export default () => (
    <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)