import Link from "next/link";
import Navbar from "./components/Navbar";
const index = ()=>{
  return(
    <>
      <Navbar/>
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
            Abir
          </a>
        </div>
      </handler>
    </>
  );
};

export default index;