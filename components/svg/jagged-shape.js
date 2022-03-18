import React from "react";

export default function JaggedShape({fill, classes}) {
    let fillStyle = {
        fill: fill
    }

    return (
        <svg style={fillStyle} className={classes || "jagged-shape"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 48"
             aria-hidden="true" preserveAspectRatio="none">
                <polygon points="301.08 0 375 13 375 0 301.08 0"/>
                <polygon points="0 27.5 91.16 48 156.7 27.5 176.41 41.5 301.08 0 0 0 0 27.5"/>
        </svg>
    )
}