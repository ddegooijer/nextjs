import React from "react";

export default function EF2Logo({width, height, classes, negative}) {
    return (
        <svg width={width || 44} height={height || 44} viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg"
             className={classes}>
            <title>EF2 logo</title>
            <path d="M14.0451 7.72921L0 4.03418V39.2708L29.354 47L43.381 43.305V0L14.0451 7.72921Z"
                  fill={negative ? 'white' : '#EE8031'}/>
            <path
                d="M11.1935 18.742V23.2939H14.786V25.543H11.1935V30.3269H15.6525V32.5761H8.73828V16.5107H15.6525V18.7599H11.1935V18.742Z"
                fill={negative
                    ? '#00212D' : 'white'}/>
            <path
                d="M20.7247 18.742V23.2939H24.2089V25.543H20.7247V32.5761H18.2695V16.5107H25.0755V18.7599L20.7247 18.742Z"
                fill={negative
                    ? '#00212D' : 'white'}/>
            <path
                d="M34.6618 19.9208V20.5099C34.6618 22.0629 34.1924 23.4195 32.6399 25.9007L29.8959 30.2383H34.6618V32.541H27.0977V30.4704L30.7443 24.669C31.8817 22.8483 32.2066 21.7237 32.2066 20.4206V20.0993C32.2066 19.0462 31.7372 18.4928 30.8346 18.4928C29.932 18.4928 29.4626 19.0462 29.4626 20.4028V21.2061L27.0977 21.099V19.9922C27.0977 17.636 28.5058 16.2437 30.8888 16.2437C33.2356 16.2615 34.6618 17.6181 34.6618 19.9208Z"
                fill={negative
                    ? '#00212D' : 'white'}/>
        </svg>
    )
}