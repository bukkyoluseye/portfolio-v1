import React from "react";
import './VisuallyHidden.css'

const VisuallyHidden = (props: { children: any }) => {
  const { children } = props;
  return <span className="visually-hidden">{children}</span>;
};

export default VisuallyHidden;
