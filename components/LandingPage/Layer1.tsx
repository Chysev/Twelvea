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


const Layer1 = ({ datas }) => {
    return (
        <div className="flex" >
            <div className="flex flex-col gap-[2rem] pb-[20px] justify-center mt-[8.5rem] mx-auto w-[1200px] px-[20px] py-auto max-w-[1200px]">

                <div className="flex max-h-[600px] max-w-[1050px] border-0 m-auto">
                    {datas.map((datas: any) => (
                        <img
                            className="w-[100%] h-[100%] rounded-[37px]"
                            key={datas.id}
                            src={datas.Logo} alt="" />
                    ))}
                </div>

                <div className="grp-cards py-[10px] max-w-[1010px] w-[100%] m-auto flex overflow-x-scroll">
                    {datas.map((datas: any) => (
                        <img
                            className="max-h-[400px] rounded-[27px] px-[5px] max-w-[490px] w-[100%] h-[100%]"
                            key={datas.id}
                            src={datas.image} alt="" />
                    ))}
                </div>

            </div>
        </div>
    )
}


export default Layer1

