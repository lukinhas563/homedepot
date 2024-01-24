import Nav from "@/components/Nav"
import Image from "next/image"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter()

  function handleShop() {
    router.push('/shop/shop')
  }

  function handleSend(e) {
    e.preventDefault()
  }

  return (
    <>
      <Nav />
      <header className="header">
        <div className="p-20 title">
          <h2>New interior collection</h2>
          <p>A competent interior design will squezze a rich inner world
            into even most ilimited room size</p>
          <button onClick={() => handleShop()}>Shop</button>
        </div>
      </header>
      <h3 className="popular">- Popular</h3>
      <section>
        <div>
          <span className='row-span-2 bg-red-800 h-[400px]'>
            <p>Sofas</p>
            <Image src='/whitesofa.png' alt='Product image' width={1000} height={1000} />
          </span>
          <span className='col-span-2 bg-slate-600'>
            <p>Beds</p>
            <Image src='/whitebed.jpg' alt='Product image' width={962} height={962} />
          </span>
          <span>
            <p>Lamps</p>
            <Image src='/whitelamp.jpg' alt='Product image' width={1000} height={1000} />
          </span>
          <span>
            <p>Armchairs</p>
            <Image src='/whitearmchair.jpg' alt='Product image' width={1500} height={1000} />
          </span>
          <span className='row-span-2 bg-amber-900 h-[400px]'>
            <p>Chairs</p>
            <Image src='/whitechair.jpg' alt='Product image' width={2560} height={2560} />
          </span>
          <span className='bg-gray-800'>
            <p>Textile</p>
            <Image src='/whitepillow.jpg' alt='Product image' width={640} height={640} />
          </span>
          <span className='col-span-2 bg-lime-800'>
            <p>Mirrors</p>
            <Image src='/whitemirror.jpg' alt='Product image' width={750} height={750} />
          </span>
          <span>
            <p>Decoration</p>
            <Image src='/whitedecoration.jpg' alt='Product image' width={1920} height={1080} />
          </span>
        </div>
      </section>
      <h4 className="popular">- Interior styles</h4>
      <article>
        <div>
          <Image src='/whitebed.jpg' alt='white decoration' width={962} height={962} />
          <span>
            <h5>White style</h5>
            <p>White decorations are a popular choice in the United States, embodying a timeless
              and classic aesthetic that transcends trends. Whether it`s a pristine white
              Christmas,a wedding adorned in ivory elegance, or a clean and minimalist
              home interior, the color white is celebrated for its versatility and ability
              to create a sense of purity and simplicity.</p>
            <button>more details</button>
          </span>
        </div>
      </article>
      <form>
        <div>
          <h6 className='text-5xl'>Newsletter</h6>
          <p>Registr now with our newsletter and get the latest updates available</p>
        </div>
        <div className="newsletter-form">
          <input type="text" className='border-2 w-2/4 h-[40px] p-[20px]' placeholder='Name'></input>
          <input type="text" className='border-2 w-2/4 h-[40px] p-[20px]' placeholder='Email'></input>
          <button onClick={(e) => handleSend(e)}>send</button>
        </div>
      </form>
      <Footer />
    </>
  );
}
