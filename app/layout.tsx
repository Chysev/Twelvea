// Components
import Header from "../components/App/Header"
import Footer from "../components/App/Footer"

// Global CSS
import '../global/global.css'

const Layout = ({ children }) => {
    return (
        <>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* cdn fontawesome */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
                    />
                    <title>Document</title>
                </head>
                <body>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </>
    )
}

export default Layout


