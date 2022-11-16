// Components
import Logo from "./Layer/Logo"
import Classcards from "./Layer/Classcards"

const Layer1 = () => {

    return (
        <div className="flex" >
            <div className="flex flex-col gap-[2rem] pb-[20px] justify-center mt-[11rem] mx-auto w-[100%] px-[20px] py-auto max-w-[1200px]">
                <Logo />
                <Classcards />
            </div>
        </div>
    )
}


export default Layer1