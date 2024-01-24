import Nav from "@/components/Nav"
import Globals from "@/components/Globals"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"
import { BiX } from "react-icons/bi"
import { toast } from 'react-toastify'
import { useRouter } from "next/router"
import Link from "next/link"

export default function Cart() {

    const [products, setProducts] = useState([])
    const [mount, setMount] = useState(0)
    const [mountItens, setMountItens] = useState(0)

    const router = useRouter()

    useEffect(() => {

        let mount = []
        const cartLenght = Globals.cart.length
        setMountItens(cartLenght)

        if (cartLenght > 0) {
            Globals.cart.forEach(product => {
                const sumProduct = product.qty * product.price
                mount.push(sumProduct)
                setProducts(Globals.cart)
            })
        }


        hundleMount(mount)

    }, [Globals.cart])

    function hundleMount(mount) {

        let initialValue = 0

        const sum = mount.reduce((partialSum, a) => partialSum + a, 0)

        setMount(sum)
    }

    function handleDelete(index) {

        if (Globals.cart.length > -1) {

            const newCart = [...Globals.cart]
            newCart.splice(index, 1)

            Globals.updateCart(newCart)
            setProducts(newCart)
            toast('The item has been removed from the cart', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success'
            })

        } else {

            return

        }

    }

    function handleClick(id) {

        router.push({
            pathname: 'product',
            query: { product: id }
        })

    }

    function handleShipping() {

        if (Globals.logged) {
            router.push('shipping')
        } else {
            toast('You are not registered', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'error'
            })
        }

    }


    return (
        <>
            <Nav />
            <main className="cartProducts">
                <div className="cartProducts-header">
                    <h2>Your cart</h2>
                    <p><span>{mountItens}</span> Itens</p>
                    <p className="cartProducts-total">Total <span>{mount}</span></p>
                </div>

                <div >

                    {
                        products.length > -1 && products.map((product, index) => {

                            const hasSiblingBelow = index < products.length - 1

                            const productClasses = `cartProduct ${hasSiblingBelow ? 'border-b' : ''}`

                            return (
                                <div key={product.id} className={`cartProduct ${productClasses} `} >
                                    <img src={product.photo} alt="product image" onClick={() => handleClick(product.id)}></img>
                                    <div>
                                        <p>{product.title}</p>
                                        <p>QTY {product.qty}</p>
                                        <p>R$ {product.price}</p>
                                    </div>
                                    <BiX className="cartProduct-button" onClick={() => handleDelete(index)} />
                                </div>

                            )
                        })
                    }

                </div>

                <div className="cartButtons">
                    <Link href={'/shop/shop'}>Continue shopping</Link>
                    <button onClick={() => handleShipping()}>Proceed to checkout</button>
                </div>

            </main>
            <Footer />
        </>
    )
}