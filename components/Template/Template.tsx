const Template = ({ children }) => {
    return (
        <div className="flex min-h-[100vh] h-[100%]">
            <div className="px-[20px] justify-center flex max-w-[1200px] w-[100%] m-auto">
                {children}
            </div>
        </div>
    )
}

export default Template