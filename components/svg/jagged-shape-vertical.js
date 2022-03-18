import React from "react";

export default function JaggedShapeVertical({fill, classes}) {
    let fillStyle = {
        fill: fill
    }

    return (
        <svg style={fillStyle} className={classes || "jagged-shape jagged-shape__vertical"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 375" aria-hidden="true" preserveAspectRatio="none">
        <polygon points="0 73.92 13 0 0 0 0 73.92"/>
        <polygon points="27.5 375 48 283.84 27.5 218.3 41.5 198.59 0 73.92 0 375 27.5 375"/>
        </svg>
    )
}