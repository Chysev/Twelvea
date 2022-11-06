

// Component
import Layer1 from "../components/LandingPage/Layer1";

const url = 'https://12api.pages.dev/datas/12ADatabase.json'

async function getData() {
    const res = await fetch(url);
    return res.json();
}


type Layers = {
    datas: any,
}



const page = async (props: Layers) => {
    const datas = await getData();

    return (
        <Layer1 datas={datas} />
    )
}

export default page