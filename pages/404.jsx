import React from "react";
import Link from "next/link";
const ErrorPage = ()=>{
    return (
        <>
            <nav>
                <ul className="menu-bar">
                <Link href="blogs/Home">
                    Home
                </Link>
                <Link href="blogs/about">
                    About
                </Link>
                <Link href="blogs/contact">
                    Contact
                </Link>
                <Link href="blogs">
                    Blog
                </Link>
                <Link href="blogs/product">
                    Product
                </Link>
                </ul>
            </nav>

            <h1>404 ERRORS</h1>

        </>
    )
}
export default ErrorPage;