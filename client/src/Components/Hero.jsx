import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/girl-reading-book.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="row">
          <div className="col-12 ">
            <div
              className="text-center"
              style={{ fontWeight: "bold", color: "#fff", fontSize: "40px" }}
            >
              All the <span>Books</span> you will ever need
            </div>
            <div className="text-center" style={{ color: "#fff" }}>
              The books that you need absolutely for freeee......
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
