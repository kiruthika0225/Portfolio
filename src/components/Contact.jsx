import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PERSONAL } from '../utils/data';

const CONTACT_CARDS = [
  { icon: Mail,   label: 'Email',    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}`,                              description: 'Send me an email' },
  { icon: Phone,  label: 'Phone',    value: PERSONAL.phone,    href: `tel:${PERSONAL.phone.replace(/\s/g, '')}`,              description: 'Tap to call' },
  { icon: MapPin, label: 'Location', value: PERSONAL.location, href: null,                                                    description: 'Based in' },
];

function ContactCard({ card, index }) {
  const { icon: Icon, label, value, href, description } = card;

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={href ? { y: -4, scale: 1.02 } : {}}
      className={`flex items-center gap-4 glass border border-white/[0.07] rounded-2xl p-4 sm:p-5 transition-all duration-300 group ${
        href ? 'hover:border-blue-500/25 hover:shadow-glow cursor-pointer' : 'cursor-default'
      }`}
    >
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-500/12 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
        <Icon size={18} className="text-blue-400" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-white/35 text-xs uppercase tracking-wider mb-0.5">{description}</p>
        <p className="text-white/80 text-sm font-medium truncate group-hover:text-white transition-colors duration-300">
          {value}
        </p>
      </div>
      {href && (
        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Icon size={13} className="text-blue-400" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block" aria-label={`${label}: ${value}`}>
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Contact() {
  const [formData, setFormData]   = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [sendError, setSendError] = useState('');
  const [focused, setFocused]     = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
    if (sendError) setSendError('');
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim())    errs.name    = 'Name is required';
    if (!formData.email.trim())   errs.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email address';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setSendError('');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PERSONAL.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name}`,
          _template: "box"
        })
      });
      
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      // Fallback: open mail client so the message is never lost
      const subject = `Portfolio Message from ${formData.name}`;
      const body    = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.open(`mailto:${PERSONAL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      setSendError('Direct send failed — your mail client opened as a backup.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `contact-input ${focused === field ? 'border-blue-500/60 bg-blue-500/5' : ''} ${errors[field] ? 'border-red-500/50' : ''}`;

  return (
    <section id="contact" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-wrapper !py-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title gradient-text">Let's Connect</h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm px-4">
            Have an opportunity or project in mind? Feel free to reach out — I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>
            <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
              {CONTACT_CARDS.map((card, i) => (
                <ContactCard key={card.label} card={card} index={i} />
              ))}
            </div>

            {/* Social hint */}
            <div className="glass border border-white/[0.07] rounded-2xl p-4 sm:p-5">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Find Me On</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { href: PERSONAL.github,                label: 'GitHub',   icon: '⚡' },
                  { href: PERSONAL.linkedin,              label: 'LinkedIn', icon: '💼' },
                  { href: `mailto:${PERSONAL.email}`, label: 'Email', icon: '✉️' },
                ].map(({ href, label, icon }) => (
                  <motion.a
                    key={label}
                    href={href || '#'}
                    target={href && !href.startsWith('mailto') ? '_blank' : undefined}
                    rel="noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={!href ? (e) => e.preventDefault() : undefined}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl glass border border-white/[0.07] text-white/60 text-xs sm:text-sm hover:text-white hover:border-blue-500/30 transition-all duration-300"
                  >
                    <span>{icon}</span> {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Phone quick-call highlight */}
            <motion.a
              href={`tel:${PERSONAL.phone.replace(/\s/g, '')}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 sm:mt-6 flex items-center gap-3 w-full px-5 py-4 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/25 transition-colors">
                <Phone size={18} className="text-green-400" />
              </div>
              <div>
                <p className="text-green-400/70 text-xs uppercase tracking-wider">Tap to Call</p>
                <p className="text-green-300 font-semibold text-sm sm:text-base">{PERSONAL.phone}</p>
              </div>
              <div className="ml-auto text-green-400/50 text-lg">📞</div>
            </motion.a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong border border-white/[0.08] rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 sm:py-16 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-white/40 text-sm text-center max-w-xs px-2">
                  Thank you! Your message has been received. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 btn-secondary text-sm py-2 px-6"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Send a Message</h3>

                {/* Send error banner */}
                {sendError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/25 rounded-xl px-4 py-3 text-yellow-300 text-xs"
                  >
                    <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                    <span>{sendError}</span>
                  </motion.div>
                )}

                {/* Name */}
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Your Name</label>
                  <input
                    type="text" name="name" value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    placeholder="John Doe"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    placeholder="john@example.com"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Message</label>
                  <textarea
                    name="message" value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    rows={5}
                    placeholder="How can I help you?"
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center gap-2.5 py-3 sm:py-3.5 mt-1 sm:mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-white/20 text-xs text-center mt-1">Your message goes directly to my inbox ✉️</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
