
import { motion } from "framer-motion"
import { useRef } from "react"

import datas from '../../data/twelveadatas.json'

const Layer1 = () => {

    const scrollRef = useRef(null)


    const Logo = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            y: [-200, 0, 0]
        }
    }




    return (
        <div className="flex" >

            <div className="flex flex-col gap-[2rem] pb-[20px] justify-center mt-[6rem] mx-auto w-[100%] px-[20px] py-auto max-w-[1200px]">

                <motion.div
                    variants={Logo}
                    initial="hidden"
                    animate="show"
                    transition={{ ease: "easeOut", duration: 3, stiffness: 100 }}

                    className="flex max-h-[600px] max-w-[1050px]  border-0 m-auto">
                    {
                        datas.map((datas, index) => (
                            <img
                                className="w-[100%] h-[100%] rounded-[37px]"
                                key={index}
                                src={datas.Logo} alt="" />
                        ))
                    }
                </motion.div>

                <div
                    ref={scrollRef}
                    className="grp-cards py-[10px] max-w-[1023px] w-[100%] m-auto flex overflow-x-scroll">
                    {
                        datas.map((datas, index) => (
                            <img
                                className="max-h-[400px] rounded-[27px] px-[5px] max-w-[500px] w-[100%] h-[100%]"
                                key={index}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}


export default Layer1