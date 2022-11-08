

// Component
import Layer from "../components/LandingPage/Layer"

const url = 'https://12api.pages.dev/datas/12ADatabase.json'

export async function getServerSideProps() {

    const res = await fetch(url)
    const datas = await res.json()

    return { props: { datas } }
}

const Home = ({ datas }) => {

    return <Layer datas={datas} />

}

export default Home