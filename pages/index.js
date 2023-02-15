import Link from "next/link";
const index = ()=>{
  return(
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
      <handler className = "handler">
        <div className="brand_box"></div>
        <div className="text_box">
          <h1 className="heading_primary">
            <span className="heading_primary_main">
              Welcome to the world of ReactJS
            </span>
            <span>Love with JavaScript</span>
          </h1>
          <a href="#" className="btn btn_white btn_animated">
            Thapa Technical
          </a>
        </div>
      </handler>
    </>
  );
};

export default index;