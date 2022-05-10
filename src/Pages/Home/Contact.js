import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import './Contact.css';
const Contact = () => {
  return (
    <div className="mt-[100px] py-[60px] px-[25px] contact-us-style">
      <div className="max-w-[500px] mx-auto">
        <p className="text-center text-xl text-secondary font-bold">Contact Us</p>
        <h1 className="text-center mt-[10px] text-white text-4xl">Stay connected with us</h1>
        <div className="mt-10">
          <input
            type="text"
            placeholder="Email Address"
            class="input input-bordered input-warning w-full"
          />
          <input
            placeholder="Subject"
            type='text'
            class="input input-bordered input-warning w-full mt-5"
          />
          <textarea
          rows={3}
            placeholder="Your message"
            class="textarea textarea-warning w-full mt-5"
          />
          <div className="text-center mt-7">
          <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
