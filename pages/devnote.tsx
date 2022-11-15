import Head from "next/head"

// Component
import DevNote from "../components/DevNote/DevNote"

const devnote = () => {
    return (
        <>
            <Head>
                <title>
                    Twelve A | DevNote
                </title>
            </Head>
            <DevNote />
        </>
    )
}

export default devnote