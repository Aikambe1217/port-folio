import React from "react";

const Contacts = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-white" id="contacts">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#00df9a] mb-4">Contact Me</h2>
          <p className="text-black mb-6">
            Got a project idea or just want to say hi?  
            Feel free to reach out using the form, or connect with me via email.
          </p>
          <p className="text-gray-400">
            Email: <span className="text-[#00df9a]">aikambekishe12@gmail.com</span>
          </p>
          <p className="text-gray-400">
            Phone: <span className="text-[#00df9a]">+255694652929</span>
          </p>
        </div>

        {/* Right: Form */}
        <div>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#00df9a] text-white font-semibold py-3 rounded-lg hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
