import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const ErrorPage = ()=>{
    const router = useRouter();
    const handleInput = ()=>{
        router.push('/');
    }

    useEffect(() => {
        setTimeout(()=>{
            router.push('/');

        },3000);
    },[])
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
    
            <button onClick={handleInput}>back to home</button>

        </>
    )
}
export default ErrorPage;