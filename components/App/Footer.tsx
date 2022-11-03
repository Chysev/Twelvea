const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()

    return (
        <footer className="flex bg-[#261C2C]">
            <h1 className="m-auto text-center p-[10px]  items-center justify-center  992max:flex text-[#a2afd1]">
                © Copyright {year} - Created by John Layda. All right reserved.
            </h1>
        </footer>
    )
}

export default Footer