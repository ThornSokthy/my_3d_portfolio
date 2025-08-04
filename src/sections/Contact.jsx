import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import * as React from "react";

const Contact = () => {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Thorn SokThy',
                    from_email: form.email,
                    to_email: 'sokthythorn@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            );

            setLoading(false);
            toast.success('Message sent successfully!');

            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            setLoading(false);
            console.error("EmailJS Error:", error); // Detailed error
            toast.error('Message failed to send!');
        }

    }

    return (
        <section className=" py-20" id="contact">
            <div className="relative max-w-4xl mx-auto min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
                    <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">Let's talk</h3>
                    <p className="text-sm md:text-lg text-[#afb0b6] mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-primary-content">Full Name</legend>
                            <input type="text" placeholder="ex., John Doe"
                                   name="name"
                                   value={form.name}
                                   onChange={handleChange}
                                   required
                                   className="input input-neutral w-full rounded-md" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-primary-content">Email address</legend>
                            <input type="email"
                                   name="email"
                                   value={form.email}
                                   onChange={handleChange}
                                   required
                                   placeholder="ex., johndoe@gmail.com"
                                   className="input input-neutral w-full rounded-md" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-primary-content">Email address</legend>
                            <textarea placeholder="Share your thoughts or inquiries..."
                                      name="message"
                                      value={form.message}
                                      onChange={handleChange}
                                      required
                                      rows={5}
                                      className="textarea textarea-neutral w-full rounded-md"></textarea>
                        </fieldset>

                        <button className="bg-base-100/15 border-2 cursor-pointer py-3 hover:bg-base-300/10 transition-colors rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-sm text-white gap-3 mt-2" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="w-2.5 h-2.5 object-contain invert brightness-0" />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}


export default Contact;