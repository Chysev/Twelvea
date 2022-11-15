import Head from "next/head"

// Component
import About from "../components/About/About"

const about = () => {
    return (
        <>
            <Head>
                <title>
                    Twelve A | About
                </title>
            </Head>
            <About />
        </>
    )
}

export default about