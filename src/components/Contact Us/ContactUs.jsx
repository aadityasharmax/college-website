import React , {useState} from 'react'
import './ContactUs.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from 'react-toastify';


const ContactUs = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1d4bbd2f-1dbe-4d75-8d03-f5e3f4f2af83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src="/Images/msg-icon.png" alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src="/Images/mail-icon.png" alt="" /> aadityasharma00445@gmail.com </li>
          <li><img src="/Images/phone-icon.png" alt="" /> +91 72 52 89 8008 </li>
          <li><img src="/Images/location-icon.png" alt="" /> 77 Massachusetts Ave, Cambridge
          MA 02139, United States</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter Your Name' />
            <label>Your Email</label>
            <input type="text" name="email" placeholder='Enter Your Email' />
            <label>Phone Number</label>
            <input type="tel" email="phone"placeholder='Enter Phone Number' />
            <label>Write Your Message Here</label>
            <textarea  rows="6" name="comment" placeholder='Enter Your Message' required></textarea>
            <button className='flex items-center gap-2 bg-[#212EA0] text-white rounded-4xl px-5 py-2 cursor-pointer outline-0'>Submit now <FaArrowRightLong /></button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
}

export default ContactUs