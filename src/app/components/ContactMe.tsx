import React from 'react';


const ContactMe = () => {
    return <>
        <div className="font-sans min-h-screen p-8 pb-20 
      sm:p-20" id="contact_me">
            <form className="max-w-md mx-auto p-6 bg-transparent shadow-md rounded-lg space-y-4" action="https://formspree.io/f/your-form-id" method="POST">
                <h2 className="text-2xl font-bold text-center">Contact Me</h2>

                <div>
                    <label className="block text-gray-700">Name</label>
                    <input type="text" name="name" required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea name="message" rows={4} required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <button type="submit" className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-700">
                    Send Message
                </button>
            </form>
        </div></>
}

export default ContactMe;