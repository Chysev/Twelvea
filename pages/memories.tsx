import Head from "next/head"

// Component
import Memories from "../components/Memories/Memories"

const memories = () => {
    return (
        <>
            <Head>
                <title>
                    Twelve A | Memories
                </title>
            </Head>
            <Memories />
        </>
    )
}

export default memories