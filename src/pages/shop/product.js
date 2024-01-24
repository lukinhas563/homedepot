import Nav from "@/components/Nav"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'


import Globals from "@/components/Globals"

export default function Product() {

    const router = useRouter()
    const { product } = router.query

    const [prod, setProd] = useState([])
    const [qty, setQty] = useState(1)
    const [mainPhoto, setMainPhoto] = useState('')
    const [localCart, setLocalCart] = useState(Globals.cart)

    useEffect(() => {

        fetch(`https://dummyjson.com/products/${product}`)
            .then(res => res.json())
            .then(json => {
                setProd(json)
                setMainPhoto(json.thumbnail)
            })

        Globals.updateCart(localCart)

        if (Globals.cart.length <= 0) {
            Globals.loadFromLocalStorage()
        }

    }, [localCart])

    function handleSubtract() {

        if (qty <= 1) {
            return

        } else {
            const newValue = qty - 1
            setQty(newValue)
        }

    }

    function handleAdd() {
        const newValue = qty + 1
        setQty(newValue)
    }

    function handleImage(e) {
        const newMainPhoto = e.target.src
        setMainPhoto(newMainPhoto)
    }

    function handleCart() {
        const cartProduct = {
            id: prod.id,
            photo: prod.thumbnail,
            title: prod.title,
            qty: qty,
            price: prod.price
        }

        setLocalCart(prevCart => [...prevCart, cartProduct])

        toast('The item has been added to the cart', {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'success'
        })
    }

    return (
        <>
            <Nav />
            <main className="prodMain">
                <div className="prodMain-photos">
                    <div className="photos-main">
                        <img src={mainPhoto} alt="product image"></img>
                    </div>
                    <div className="photos-demonstration">
                        {prod.id &&
                            prod.images.map(image => {
                                return (
                                    <img src={image} alt="product image" onClick={(e) => handleImage(e)} key={image}></img>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="prodMain-infos">
                    <h1>{prod.title}</h1>
                    <h2>R$ {prod.price}</h2>
                    <p>{prod.description}</p>
                    <div className="prodQTD">
                        <p>QTY</p>
                        <button onClick={() => handleSubtract()}>-</button>
                        <span>{qty}</span>
                        <button onClick={() => handleAdd()}>+</button>
                    </div>
                    <div>
                        <button className="prodButton" onClick={() => handleCart()}>Add to cart</button>
                        <button>Add to whishlist</button>
                    </div>
                </div>

            </main>

        </>
    )
}