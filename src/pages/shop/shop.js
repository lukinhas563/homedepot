import Nav from "@/components/Nav"
import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Globals from "@/components/Globals"
import { useEffect, useState } from "react"


export default function Shop() {

    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json.products)
                setAllProducts(json.products)
            })
    }, [])

    function handleFilter(cat) {
        const category = cat.target.getAttribute('data-category')

        let productFilter = []

        if (category === 'all') {

            setProducts(allProducts)

        } else {

            allProducts.forEach(p => {

                if (p.category === category) {

                    productFilter.push(p)
                }

            })

            setProducts(productFilter)
        }

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
                        <li onClick={(e) => handleFilter(e)} data-category={'smartphones'}>Cell phones</li>
                        <li onClick={(e) => handleFilter(e)} data-category={'laptops'}>Laptop</li>
                        <li onClick={(e) => handleFilter(e)} data-category={'fragrances'}>Perfumes</li>
                        <li onClick={(e) => handleFilter(e)} data-category={'skincare'}>Skincare</li>
                        <li onClick={(e) => handleFilter(e)} data-category={'groceries'}>Groceries</li>
                        <li onClick={(e) => handleFilter(e)} data-category={'home-decoration'}>Decor</li>
                        <li onClick={(e) => handleFilter(e)} data-category={'all'}>All</li>
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