import React from "react"

export default ({location}) => (
    <section className="location">
        <h3 className="location__address">{location.name}</h3>
        <div className="location__squareFootage">{location.squareFootage}</div>
        <div className="location__squareFootage">{location.handicapAccessible}</div>
    </section>
)