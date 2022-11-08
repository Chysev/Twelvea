// Components
import Footer from "./App/Footer"
import Header from "./App/Header"

const Layout = ({ children }) => {



    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout