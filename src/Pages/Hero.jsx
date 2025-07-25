import React from "react";
import { Link } from "react-router";

function Hero() {
  return (
    <div
      className="hero min-w-full min-h-screen text-white "
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "400px",
        height: "300px",
      }}
    >
      <div className=" flex justify-center gap-5">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-5xl font-bold text-white ">Hello there</h1>
          <p className="mb-5">
            "Welcome to our e-commerce store — your one-stop destination for
            quality, value, and style. We're glad you're here!".
          </p>

          <Link
            to="/login"
            className="btn btn-primary border rounded-md bg-white text-black font-semibold p-5 m-20 "
          >
            Click to login!
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
