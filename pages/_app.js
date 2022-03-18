import Layout from '../components/layout'
import '../assets/scss/app.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}