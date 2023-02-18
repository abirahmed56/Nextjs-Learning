import Link from "next/link";
const Navbar = ()=>{
    return(

        <div>
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
                    <Link href="calculator/">
                        Calculator
                    </Link>
                </ul>
            </nav>

        </div>

    );
}
export default Navbar;