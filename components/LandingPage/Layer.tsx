
import { motion } from "framer-motion"
import { useRef } from "react"

const url = 'https://12api.pages.dev/datas/12ADatabase.json'

export async function getServerSideProps() {

    const res = await fetch(url)
    const datas = await res.json()

    return { props: { datas } }
}


const Layer1 = ({ datas }) => {

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
                    transition={{ ease: "easeOut", duration: 3 }}

                    className="flex max-h-[600px] max-w-[1050px]  border-0 m-auto">
                    {
                        datas.map((datas: any) => (
                            <img
                                className="w-[100%] h-[100%] rounded-[37px]"
                                key={datas.id}
                                src={datas.Logo} alt="" />
                        ))
                    }
                </motion.div>

                <div
                    ref={scrollRef}
                    className="grp-cards py-[10px] max-w-[1023px] w-[100%] m-auto flex overflow-x-scroll">
                    {
                        datas.map((datas: any) => (
                            <motion.img
                                initial={{ y: -200 }}
                                whileInView={{ y: 0 }}
                                transition={{ ease: "easeOut", duration: 1 }}
                                viewport={{ root: scrollRef }}
                                className="max-h-[400px] rounded-[27px] px-[5px] max-w-[500px] w-[100%] h-[100%]"
                                key={datas.id}
                                src={datas.image} alt="" />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}


export default Layer1