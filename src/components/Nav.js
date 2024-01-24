import Link from "next/link"
import Globals from "./Globals"
import { useRouter } from "next/router"
import { SlBag } from "react-icons/sl"
import { useEffect, useState } from "react"

export default function Nav() {

    const router = useRouter()

    const [bag, setBag] = useState(0)

    useEffect(() => {

        if (Globals.cart.length <= 0) {
            Globals.loadFromLocalStorage()
            return
        }

        const values = [...Globals.cart]
        const newValues = values.length

        setBag(newValues)

    }, [Globals.cart])

    function handleCart() {
        router.push('/shop/cart')
    }

    return (
        <div className="navigation">
            <div className=" flex gap-10 ">
                <Link href={'/'} className="logo">homedepot.</Link>
                <nav className="navMenu flex gap-10">
                    <Link href={'/shop/shop'}>Shop</Link>
                    <Link href={'/'}>Sale</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact</Link>
                </nav>
            </div>
            <div className='flex items-center'>
                <input type="search" placeholder="Search..." className='px-4 h-[40px]'></input>
                <div className="bagShop-main">
                    <SlBag className='bagShop' onClick={() => handleCart()} />
                    {bag > 0 && <div className='bagShop-count' onClick={() => handleCart()} >{bag}</div>}
                </div>
            </div>
        </div>
    )
}