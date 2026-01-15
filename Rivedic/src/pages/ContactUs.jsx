const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded h-32"
        ></textarea>

        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
