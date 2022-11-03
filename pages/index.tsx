import dynamic from "next/dynamic";

// Components
import Layer1 from "../components/LandingPage/Layer1";

const url = 'https://12api.pages.dev/datas/12ADatabase.json'

export async function getServerSideProps() {
  const twelveadatas = await fetch(url)
  const datas = await twelveadatas.json();

  return {
    props: {
      datas,
    }
  }
}

const Home = ({ datas }) => {

  return (
    <>
      <Layer1 datas={datas} />

    </>
  )
}

export default Home