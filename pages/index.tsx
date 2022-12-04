import Head from "next/head"

// Component
import Layer from "../components/LandingPage/Layer"
import Countdown from "../components/Others/CountDown"


const Home = () => {

    return (
        <>
            <Head>
                <title>
                    Twelve A | Home
                </title>
            </Head>
            {/* <Layer /> */}
            <Countdown />
        </>
    )

}

export default Home