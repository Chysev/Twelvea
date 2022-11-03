// Component
import { useEffect, useState } from 'react'

const BrandName = () => {

    const [Logo, setLogo] = useState(false)

    useEffect(() => {
        const Resize = () => {
            if (window.scrollY >= 80) {
                setLogo(true)
            } else {
                setLogo(false)
            }
        }

        window.addEventListener('scroll', Resize)
    })

    return (
        <h1 className={`nav-font-brand  tracking-[3px] text-[#6E85B2] ${Logo ? 'text-[28px] nav-trans' : 'text-[24px] nav-trans'}`}>Twelve A</h1>
    )
}

export default BrandName