import Navbar from "./components/Navbar";
const index = ()=>{
  return(
    <div className="handle_bg">
      <Navbar/>
      <handler className = "handler">
        <div className="text_box">
          <h1 className="heading_primary">
            <span >
              Welcome to the world of ReactJS
            </span>
          </h1>
          <a href="#" className="btn btn_white btn_animated">
            Abir
          </a>
        </div>
      </handler>
    </div>
  );
};

export default index;