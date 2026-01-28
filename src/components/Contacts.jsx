import React, { useState } from "react";

const Contacts = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xrbylbbd", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section
      id="contacts"
      className="relative w-full bg-white py-24 px-6 overflow-hidden"
    >
      {/* Decorative accents */}
      <div className="absolute top-24 right-0 w-72 h-72 bg-[#00df9a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: INFO */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-[#00df9a] uppercase tracking-widest font-semibold mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Let’s work together
          </h2>

          <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mb-6">
            Have a project in mind, a question, or just want to say hello?
            I’m always open to discussing new ideas and opportunities.
          </p>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium text-black">Email:</span>{" "}
              <span className="text-[#00df9a]">
                aikambekishe12@gmail.com
              </span>
            </p>
            <p>
              <span className="font-medium text-black">Phone:</span>{" "}
              <span className="text-[#00df9a]">
                +255694652929
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT: FORM CARD */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#00df9a] to-black rounded-2xl blur opacity-20" />
          
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl flex flex-col space-y-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            />

            <textarea
              name="message"
              required
              placeholder="Your message"
              rows="5"
              className="px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            />

            <button
              type="submit"
              className="mt-2 px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-[#00df9a] hover:text-black transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>

            {/* Status message */}
            {status && (
              <p className="text-center text-sm font-medium text-gray-700 pt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
