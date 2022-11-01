import React from "react";
import img from "./form-img.png";

function Form() {
  return (
    <div className="form_div">
      <img src={img} alt="form image" className="image" />
      <div className="form_content">
        <h1>Business news delivered weekly.</h1>
        <p>
          Stay up to date with the latest articles and business updates. You'll
          even get special recommendations weekly.
        </p>
        <div className="form">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
