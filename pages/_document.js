import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=optional"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,700;1,300&display=swap&display=optional"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument