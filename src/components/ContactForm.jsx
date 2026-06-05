import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setStatus('success');
            setLoading(false);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: '📧', title: 'Email', value: 'erlangga@example.com', link: 'mailto:artaaazmuridbazma@gmail.com' },
        { icon: '📱', title: 'WhatsApp', value: '+62 812-3456-7890', link: 'https://wa.me/62882936557753' },
        { icon: '📍', title: 'Location', value: 'Bogor, West Java', link: '#' },
        { icon: '⚡', title: 'Response Time', value: '< 24 Hours', link: '#' }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

            {/* LEFT COLUMN - justify-between biar tombol mentok bawah */}
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-2xl font-bold text-[#831514] mb-4">Let's Work Together</h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#831514] transition-all text-sm" />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#831514] transition-all text-sm" />
                        <textarea name="message" rows="5" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#831514] transition-all resize-none text-sm" />
                    </form>
                </div>

                {/* Tombol Send Message - mt-4 buat jarak konsisten */}
                <button type="submit" disabled={loading}
                    className="w-full py-3 bg-[#831514] text-white font-bold rounded-lg hover:bg-[#5a0e0e] transition-all disabled:opacity-50 text-sm mt-4">
                    {loading ? 'Sending...' : 'Send Message 🚀'}
                </button>
            </div>

            {/* RIGHT COLUMN */}
            {/* RIGHT COLUMN */}
            <div className="flex flex-col justify-between h-full">

                <div>
                    <h3 className="text-2xl font-bold text-[#831514] mb-4 text-center">
                        Get In Touch
                    </h3>

                    <div className="grid grid-cols-2 gap-3 auto-rows-fr">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                className="min-h-[110px] p-3 bg-white rounded-lg border border-gray-200 hover:border-[#831514] hover:shadow-md transition-all text-center flex flex-col justify-center"
                            >
                                <div className="text-xl mb-1">{info.icon}</div>

                                <p className="font-bold text-[#1a1a1a] text-xs">
                                    {info.title}
                                </p>

                                <p className="text-xs text-[#831514] font-semibold">
                                    {info.value}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>

                <a
                    href="/cv-erlangga-artha.pdf"
                    download
                    className="flex items-center justify-center gap-2 p-3 bg-[#831514] text-white rounded-lg hover:bg-[#5a0e0e] transition-all text-sm font-bold shadow-md hover:shadow-lg mt-4"
                >
                    📥 Download My CV
                </a>
            </div>
        </div>
    );
};

export default ContactForm;