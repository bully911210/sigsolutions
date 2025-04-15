import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setShowModal(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      }, 1500);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Ready to grow your revenue and reach?</h2>
          <p className="section-subtitle">
            Get in touch with our team to discuss how SIG Solutions can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#001F54] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:franz@sigsolutions.co.za" className="text-[#001F54] hover:underline">
                    franz@sigsolutions.co.za
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#001F54] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:+27123456789" className="text-[#001F54] hover:underline">
                    +27 12 345 6789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#001F54] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Office</h4>
                  <address className="not-italic">
                    Pretoria, South Africa
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-3">Business Hours</h4>
              <p className="mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54] ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54] ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54] ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close modal"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <p className="mb-6">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>
            <div className="flex justify-end">
              <button 
                onClick={closeModal}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
