import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero">
      <h1>Hey!</h1>
      <h1>
        {`I'm `}
        <span>Bukky Oluseye</span>
      </h1>
      <h1>A software developer & UX/UI designer based in London</h1>
    </main>
  );
};

export default Hero;
