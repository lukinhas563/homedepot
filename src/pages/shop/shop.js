import Nav from "@/components/Nav"
import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Globals from "@/components/Globals"
import { useEffect, useState } from "react"


export default function Shop() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json.products)
            })
    }, [])

    function handleFilter(e) {
        const Line = e.target
        const LineExpansible = e.target.nextSibling
        LineExpansible.classList.toggle('expansive')
        Line.classList.toggle('bold')
    }

    return (
        <>
            <Nav />
            <header className="shopHeader">
                <h2>Product catalog</h2>
            </header>
            <main className="shopMain">
                <aside className="shopfilter">
                    <h3>Categories</h3>
                    <ul className="shopfilter-filters">
                        <li>Cell phones</li>
                        <li onClick={(e) => handleFilter(e)}>Armchairs</li>
                        <ul className="shopfilter-filters2 expansive">
                            <li>All</li>
                            <li>Interior</li>
                            <li>Office</li>
                            <li>Rocking chairs</li>
                            <li>Leather armchairs</li>
                        </ul>
                        <li>Laptop</li>
                        <li>Perfumes</li>
                        <li>Boards</li>
                        <li>Lamps</li>
                        <li>Textile</li>
                        <li>Decor</li>
                    </ul>
                </aside>
                <div className="shopMain-products">
                    {products.map(product => {
                        return (
                            <Card key={product.id} title={product.title} price={product.price} images={product.thumbnail} id={product.id} />
                        )
                    })}
                </div>

            </main>
            <Footer />
        </>
    )
}