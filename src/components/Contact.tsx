import React from 'react'

function Contact() {
    return (
        <section id='contact' className="bg-cyber-bg text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
                <div className="max-w-md mx-auto">
                    <form
                        action="https://formspree.io/f/manjykgl"
                        method="POST"
                        className="flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="p-3 rounded-lg bg-[#1E293B] border border-cyber-orange focus:outline-none focus:ring-2 focus:ring-cyber-orange transition"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="p-3 rounded-lg bg-[#1E293B] border border-cyber-orange focus:outline-none focus:ring-2 focus:ring-cyber-orange transition"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows={5}
                            className="p-3 rounded-lg bg-[#1E293B] border border-cyber-orange focus:outline-none focus:ring-2 focus:ring-cyber-orange transition"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-cyber-orange hover:bg-orange-600 text-white px-6 py-2 rounded-xl transition"
                        // onSubmit={(e) => {
                        //     e.preventDefault();
                        //     alert('Message sent successfully!');
                        // }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact