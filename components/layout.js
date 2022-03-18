import Navbar from './layouts/navbar'
import Footer from './layouts/footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
