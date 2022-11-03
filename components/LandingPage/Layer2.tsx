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


const Layer2 = ({ datas }) => {
    return (
        <div className="flex">
            <div className="grid gap-[2rem] pb-[20px] justify-center mt-[4rem] mx-auto w-[1200px] px-[20px] py-auto max-w-[1200px]">

                <div className="py-auto m-auto flex flex-col items-center">

                    <div className="grp-cards max-w-[1010px] w-[100%] m-auto flex flex-auto overflow-x-scroll gap-[1rem]">
                        {datas.map((datas: any) => (
                            <img
                                className="flex rounded-[18px] pb-[10px] p-[1px] max-w-[450px] max-h-[450px] h-[100%] w-[100%] object-fill"
                                key={datas.id}
                                src={datas.image} alt="" />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Layer2