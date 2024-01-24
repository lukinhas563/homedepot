import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Card(props) {

    const router = useRouter()

    function handleClick() {
        router.push({
            pathname: 'product',
            query: { product: props.id }
        })
    }

    return (
        <div className="shopCard" key={props.id} onClick={() => handleClick()}>
            <div className="shopCard-img">
                <img src={props.images} alt='product image'></img>
            </div>
            <div className='flex flex-col justify-center items-center card-info'>
                <p>{props.title}</p>
                <p>R$ {props.price}</p>
            </div>
        </div>
    )
}