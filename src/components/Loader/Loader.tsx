import React from "react";
import "./loader.css";

const Loader = (props: { size: string; variant: string; }) => {
  const { size, variant } = props;
  return (
    <div
      className={`loader-container ${
        size === ("xs" || "s" || "m") ? size : "l"
      } ${variant === ("secondary" || "disabled") ? variant : "primary"}`}
    >
      <div className="loader">
        <div className="circle">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
