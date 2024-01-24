import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Globals from "@/components/Globals"
import { useRouter } from "next/router"

export default function ShippingInfo() {

    const router = useRouter()

    function handleBack() {

        router.push('cart')

    }

    if (Globals.logged) {
        return (

            <>
                <Nav />
                <div className="formShipping">
                    <div className="formShipping-title">
                        <h2>Shipping info</h2>
                    </div>
                    <form>
                        <div>
                            <input type="text" placeholder="First name"></input>
                            <input type="text" placeholder="Last name"></input>
                        </div>
                        <br></br>
                        <div>
                            <input type="text" placeholder="Telephone"></input>
                            <input type="text" placeholder="Company"></input>
                        </div>
                        <br></br>
                        <input type="text" placeholder="Street address"></input>
                        <br></br>
                        <div>
                            <input type="text" placeholder="City"></input>
                            <input type="text" placeholder="Zip code"></input>
                        </div>
                        <br></br>
                        <div>
                            <input type="text" placeholder="State"></input>
                            <input type="text" placeholder="Country"></input>
                        </div>
                    </form>
                    <div className="shipping-butons">
                        <button className='shipping-butons-back' onClick={() => handleBack()}>Go back to cart</button>
                        <button className="shipping-butons-proceed">Proceed to checkout</button>
                    </div>
                </div>
                <Footer />
            </>
        )
    } else {

        return router.push('cart')

    }


}