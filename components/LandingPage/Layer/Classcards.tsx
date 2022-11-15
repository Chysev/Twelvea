// data
import datas from '../../../data/twelveadatas.json'

const Classcards = () => {
    return (
        <div className="grp-cards py-[10px] max-w-[1023px] w-[100%] m-auto flex overflow-x-scroll">
            {
                datas.map((datas, index) => (
                    <img
                        className="max-h-[400px] rounded-[27px] px-[5px] max-w-[500px] w-[100%] h-[100%]"
                        key={index}
                        src={datas.image} alt="" />
                ))
            }
        </div>
    )
}

export default Classcards