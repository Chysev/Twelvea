import Head from "next/head"

// Component
import Memories from "../components/Memories/Memories"
import Template from "../components/Template/Template"
import Code404 from "../components/404/404"

const memories = () => {
    return (
        <>
            <Head>
                <title>
                    Twelve A | Memories
                </title>
            </Head>
            <Template>
                <Code404 />
            </Template>
        </>
    )
}

export default memories