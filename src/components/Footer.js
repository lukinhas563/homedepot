import Link from "next/link";

export default function Footer() {

    return (
        <footer>
            <p>© Copyright Homedepot 2024</p>
            <div>
                <Link href={'/shop/shop'}>Products</Link>
                <Link href={'/shop/shop'}>Popular</Link>
                <Link href={'/'}>Sale</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
            </div>
        </footer>
    )
}